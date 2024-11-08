"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function Ranking() {
  interface BooksRaking {
    title: string;
    url: string;
    image_url: string;
    count: number;
  }

  const [rankingData, setRankingData] = useState<BooksRaking[]>([]);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("books_ranking")
      .select("*")
      .order("count", { ascending: false }) // countの降順
      .limit(10); // 10件に制限

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setRankingData(data); // データをそのままセット
    }
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
            人気ランキング
          </h1>
        </div>
        {rankingData.map((data, index) => (
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
            <h2>{data.count}票</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
