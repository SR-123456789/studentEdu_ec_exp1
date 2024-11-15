"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

export default function Home() {
  const [items, setItems] = useState<any[]>([]); // データを管理する状態
  const [searchTerm, setSearchTerm] = useState(""); // 初期検索キーワード
  const [isLoading, setIsLoading] = useState(true); // ローディング状態
  const [error, setError] = useState(null); // エラーメッセージ管理
  const [clickedItems, setClickedItems] = useState<Set<number>>(new Set()); // クリックしたアイテムのインデックスを追跡

  // API からデータを取得する関数
  const fetchItems = async (keyword: string) => {
    try {
      setIsLoading(true); // ローディングを開始
      const response = await fetch(
        `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=${keyword}&applicationId=1006740518069790219`
      );
      if (!response.ok) throw new Error("データの取得に失敗しました");
      const data = await response.json();
      setItems(data.Items); // データを state に保存
    } catch (error: any) {
      setError(error.message); // エラーを state に保存
    } finally {
      setIsLoading(false); // ローディングを終了
    }
  };

  // コンポーネントの初回マウント時にデータ取得
  useEffect(() => {
    fetchItems("web開発");
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault(); // ページリロードを防ぐ
    fetchItems(searchTerm); // 検索実行
  };

  /**
   * upsert処理を行う。
   * upsert処理とは、該当データがすでに存在する場合は、データの更新を行い、存在しない場合は、
   * データの追加を行う処理のことである。
   * @param data
   * @param index
   */
  const upsertData = async (
    data: {
      title: string;
      url: string;
      image_url: string;
      updated_at: Date;
    },
    index: number
  ) => {
    setClickedItems((prev) => new Set(prev).add(index));

    await supabase
      .from("favorite")
      .upsert(data, { onConflict: "title" })
      .select("*");
  };

  return (
    <div className="container mx-auto max-w-[1000px] p-4">
      {/* 検索バー */}
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="Search items..."
          className="border border-gray-300 rounded-md p-2 flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-600 text-white rounded-md p-2 ml-2"
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap gap-4 flex justify-center">
        {items.map((item, index) => (
          <div key={index} className="w-40 flex items-center flex-col mb-5">
            <a href={item.Item.itemUrl} className="h-[300px]">
              {item.Item.mediumImageUrls[0] &&
                item.Item.mediumImageUrls[0].imageUrl && (
                  <Image
                    src={item.Item.mediumImageUrls[0].imageUrl}
                    alt={item.Item.itemName}
                    width={128}
                    height={128}
                  />
                )}
              <h2 className="text-center text-sm mt-2 w-32 line-clamp-5">
                {item.Item.itemName}
              </h2>
            </a>
            <button
              className={`p-2 rounded-lg font-bold text-white ${
                clickedItems.has(index) ? "bg-gray-500" : "bg-red-300"
              }`} // クリック後の色を変更
              onClick={() =>
                upsertData(
                  {
                    title: item.Item.itemName,
                    url: item.Item.itemUrl,
                    image_url: item.Item.mediumImageUrls[0].imageUrl,
                    updated_at: new Date(),
                  },
                  index
                )
              }
            >
              お気に入り登録する
            </button>
          </div>
        ))}
      </div>

      {/* 該当するアイテムがない場合のメッセージ */}
      {items.length === 0 && !isLoading && !error && (
        <p className="text-center text-gray-500 mt-4">No items found</p>
      )}
    </div>
  );
}
