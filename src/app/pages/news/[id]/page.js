"use client";

import { useState } from "react";
import CategoriesMenu from "../../../components/CategoriesMenu";
import useFetch from "@/app/hooks/useFetch";
import { fetchAllNews } from "@/app/axioService/allFetchNews";

export default function Page() {
  const { data: news, loading, error } = useFetch(fetchAllNews);
  const [selectedNews, setSelectedNews] = useState(null);

  if (loading) return <p>Haberler yükleniyor...</p>;
  if (error) return <p>Haberler alınırken hata oluştu.</p>;

  return (
    <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
      {/* Sol Liste */}
      <div className="w-[480px] bg-white border-b md:border-r border-gray-300 md:border-b-0 overflow-x-auto md:overflow-y-auto md:h-screen">
        <ul className="flex flex-row text-black text-sm w-full whitespace-nowrap md:flex-col">
          {news.map((item, index) => (
            <li
              key={item._id}
              className={`relative border-b border-gray-300 p-6 flex flex-row items-start transition duration-300 ${
                selectedNews?._id === item._id ? "bg-yellow-50" : ""
              }`}
              onClick={() => setSelectedNews(item)}
            >
              <div className="absolute top-0 left-6 font-bold text-2xl pt-0 md:text-5xl opacity-25">
                {String(index + 1).padStart(2, "0")}
              </div>
              <img
                className="mr-7 pt-3"
                src="/images/14.png"
                alt={`Haber ${item.title}`}
                width={160}
                height={48}
              />
              <div className="flex-1 flex flex-col">
                <p className="text-sm font-bold text-black">
                  {item.title.slice(0, 30)}...
                </p>
                <br />
                <p className="text-xs text-black opacity-50">3 saat önce</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sağ Detay */}
      <div className="flex-1 bg-yellow-50 p-4 md:p-8 h-full md:h-screen overflow-y-auto">
        <div className="text-black">
          {selectedNews ? (
            <div className="flex flex-col">
              <h1 className="mb-4 text-xl md:text-2xl font-bold">
                {selectedNews.title}
              </h1>
              <div className="flex flex-col justify-end pt-8 pb-2">
                <img
                  src="/images/14.png"
                  alt="Haber görseli"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl mx-auto object-cover"
                />
              </div>
              <div className="mt-4 text-sm md:text-base">
                <p className="mb-4">{selectedNews.summary}</p>
              </div>
            </div>
          ) : (
            <div className="mb-4 text-xl md:text-2xl font-bold">
              Bir haber seçin
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
