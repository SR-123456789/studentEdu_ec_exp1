"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";

export default function Favorite() {
  interface Favorite {
    title: string;
    url: string;
    image_url: string;
    updated_at: number;
  }

  const [favoriteData, setFavoriteData] = useState<Favorite[]>([]);

  const fetchData = async () => {
    const { data } = await supabase
      .from("favorite")
      .select("*")
      .order("updated_at", { ascending: false }) // countの降順
      .limit(10); // 10件に制限

    if (!data) {
      setFavoriteData([]);
      return;
    }
    setFavoriteData(data); // データをそのままセット
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto">
      {" "}
      {/* 外側の div は h-screen に設定 */}
      <div className="flex flex-col w-full pb-20">
        {" "}
        {/* 下に余白を設定 */}
        <div className="flex items-center justify-center w-full h-24 mt-10">
          <h1 className="text-5xl font-bold bg-white mb-2 mt-2">
            お気に入り一覧
          </h1>
        </div>
        {favoriteData.map((data, index) => (
          <a
            key={index}
            className="flex flex-row items-center justify-around mb-10"
            href={data.url}
          >
            <div className="flex items-center justify-center w-8 h-8 ml-2 mr-2 bg-blue-500 rounded-full">
              <h2 className="font-bold text-white">{index + 1}</h2>
            </div>
            <Image src={data.image_url} alt="本" width={128} height={128} />
            <div className="flex items-center justify-center w-3/5 h-32 ml-2">
              <h2>{data.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
