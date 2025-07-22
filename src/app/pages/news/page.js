"use client";
import CategoriesMenu from "@/app/components/CategoriesMenu";
import NewsCard from "../../components/NewsCard";

import useFetch from "@/app/hooks/useFetch";
import { fetchAllNews } from "@/app/axioService/allFetchNews";

export default function Page() {
  const {
    data: news,
    loading,
    error,
  } = useFetch(fetchAllNews);
  if (loading) return <p>Haberler yükleniyor...</p>;
  if (error) return <p>Haberler alınırken hata oluştu.</p>;
  if (!news) return <p>Haber bulunamadı.</p>;
  return (
    <main className="flex min-h-screen flex flex row relative">
      <div className="flex w-[400px] items-center bg-[#FFF] p-8 border-r">
        <div className="text-black">
          <div className="text-2xl font-[Poppins] opacity-50">26.07.2025</div>
          <div className="mb-4 text-4xl font-bold font-[AbrilFatface]">
            Bugün ne oldu?
          </div>
          <div className="text-[15px] text-[#95989A] font-[Poppins]">
            {news?.[0]?.summary ?? "Haber Yok"}
          </div>
        </div>
        <footer className="text-xs text-[#95989A] absolute bottom-4 font-[Poppins] ">
          <p>
            Copyright © 2017 – Tüm hakları saklıdır. <br />
            Habertürk Gazetecilik A.Ş.
          </p>
        </footer>
      </div>

      <div className="w-[calc(100%-400px)] bg-white overflow-x-auto h-screen">
        <ul className="text-black text-sm flex flex-row items-stretch h-full">
          {news.map((item, index) => (
            <li key={item._id || index} className='h-full'>
              <NewsCard id={item._id} title={item.title} summary={item.summary} PublishTime={item.publishedAt} imageLink={item.coverImage} index={index} />

            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
