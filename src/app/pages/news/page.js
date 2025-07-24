"use client";
import { useState, useEffect } from "react";
import CategoriesMenu from "@/app/components/CategoriesMenu";
import NewsCard from "../../components/NewsCard";
import { useFetch } from "../../hooks/useFetch";
import { fetchAllNews } from "@/app/axioService/allFetchNews";

export default function Page() {
  const {
    data: news,
    loading,
    error,
  } = useFetch(fetchAllNews);

  const [lastAllNews, setLastAllNews] = useState(null);

  useEffect(() => {
    if (news && news.length > 0) {
      setLastAllNews(news);
    }
  }, [news]);

  const displayAllNews = news && news.length > 0 ? news : lastAllNews;

  if (error) return <p>Haberler alınırken hata oluştu.</p>;
  if (!displayAllNews) return null;

  return (
    <main className="flex min-h-screen flex-row relative">
      <div className="flex w-[400px] items-center bg-[#FFF] p-8 border-r">
        <div className="text-black">
          <div className="text-2xl font-[Poppins] opacity-50">26.07.2025</div>
          <div className="mb-4 text-4xl font-bold font-[AbrilFatface]">
            Bugün ne oldu?
          </div>
          <div className="text-[15px] text-[#95989A] font-[Poppins]">
            {displayAllNews?.[0]?.summary ?? "Haber Yok"}
          </div>
        </div>
        <footer className="text-xs text-[#95989A] absolute bottom-4 font-[Poppins]">
          <p>
            Copyright © 2017 – Tüm hakları saklıdır. <br />
            Habertürk Gazetecilik A.Ş.
          </p>
        </footer>
      </div>

        <div className="w-[calc(100%-400px)] bg-white overflow-x-auto h-screen">
          <ul className="text-black text-sm flex flex-row items-stretch h-full">
            {displayAllNews.flatMap((item, index) => ( 
              index % 3 === 2 ?

                [<li key={item._id || index} className='h-full'>
                  <NewsCard
                    id={item._id}
                    title={item.title}
                    summary={item.summary}
                    PublishTime={new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    imageLink={item.coverImage}
                    index={index}
                  />
                </li>,
                <li key={"a"+item._id || index} className="relative border-r border-gray-300 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center px-4">
                  <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">REKLAM</div>
                  <img src="/images/reklam.png" alt="Görsel" width={260} height={150}/>
                </li>] : 
                [<li key={item._id || index} className='h-full'>
                  <NewsCard
                    id={item._id}
                    title={item.title}
                    summary={item.summary}
                    PublishTime={new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    imageLink={item.coverImage}
                    index={index}
                  />
                </li>]
            ))}
          </ul>
        </div>
      </main>
    );
  }

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
