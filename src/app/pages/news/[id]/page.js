"use client";

import { useEffect, useState } from "react";
import CategoriesMenu from "../../../components/CategoriesMenu";
// import NewsCard from "../../../components/NewsCard";
import { fetchNewsById, fetchAllNews } from "@/app/axioService/allFetchNews";
import { useFetchById, useFetch } from "@/app/hooks/useFetch";
import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";


const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
`;

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: allNews,
    loading: loadingAll,
    error: errorAll,
  } = useFetch(fetchAllNews);

  const {
    data: news,
    loading,
    error,
  } = useFetchById(() => (id ? fetchNewsById(id) : Promise.resolve(null)), [id]);

  const [lastAllNews, setLastAllNews] = useState(null);

  useEffect(() => {
    if (allNews && allNews.length > 0) {
      setLastAllNews(allNews);
    }
  }, [allNews]);

  const displayAllNews = allNews && allNews.length > 0 ? allNews : lastAllNews;

  // Global hata ve yükleme kontrolleri
  if (loading || loadingAll) return null;
  if (error || errorAll) return <p>Bir hata oluştu. Lütfen tekrar deneyin.</p>;

  return (
    <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
      {/* Sol Menü – Haber listesi */}
      <div className="w-full md:w-[400px] bg-white border-b md:border-r border-gray-300 md:border-b-0 md:h-screen overflow-y-auto">
        <ul className="flex flex-col">
          {displayAllNews?.map((item, index) => (
            <li
              key={item._id}
              onClick={() => router.push(`/pages/news/${item._id}`)}
              className={`cursor-point relative border-b border-gray-300 p-6 hover:bg-yellow-50 flex flex-row items-start transition duration-300 ${item._id === id ? 'bg-yellow-50' : ''
                                }`}
            >
              <div className="absolute top-6 left-6 text-black font-bold text-2xl pt-0 md:text-5xl opacity-25">{String(index + 1).padStart(2, "0")}</div>
              <img
                  className="mr-7 pt-9"
                  src={item.coverImage}
                  alt={`Haber ${id}`}
                  width={160}
                  height={48}
              />
              <div className="flex-1 flex flex-col">
                  <p className="text-sm font-bold" style={{ color: '#000000' }}>
                      <br></br>
                      {item.title}
                  </p>
                  <br />
              <p className="text-xs" style={{ color: '#000000' }}>
                {new Date(item.publishedAt).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Sağ Panel – Haber Detay */}
      <div className="flex-1 bg-yellow-50 p-4 md:p-8 border-t-0 md:border-l-0 h-full md:h-screen overflow-y-auto">
        {news ? (
          <div className="text-black">
            <div className="flex flex-col">
              <h1 className="mb-4 text-xl md:text-2xl font-bold">{news.title}</h1>
              <div className="flex flex-col justify-end pt-8 pb-2">
                <img
                  className="w-full max-w-2xl mx-auto object-cover"
                  src={news.coverImage}
                  alt={news.title || "Haber görseli"}
                  width={600}
                  height={400}
                />
              </div>
              <div className="mt-4 text-sm md:text-base whitespace-pre-wrap">
                {news.content.trim() || loremIpsum}
              </div>
            </div>
          </div>
        ) : (
          <p>Haber detayı bulunamadı.</p>
        )}
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
