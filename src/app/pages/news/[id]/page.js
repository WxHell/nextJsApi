"use client";

import CategoriesMenu from "../../../components/CategoriesMenu";
import NewsCard from "../../../components/NewsCard";

import { fetchNewsById, fetchAllNews } from "@/app/axioService/allFetchNews";
import { useFetchById, useFetch } from "@/app/hooks/useFetch";
import { useParams, useRouter } from "next/navigation";

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...`;

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: news,
    loading: loadingNews,
    error: errorNews,
  } = useFetchById(() => (id ? fetchNewsById(id) : Promise.resolve(null)), [id]);

  const {
    data: allNews,
    loading: loadingAll,
    error: errorAll,
  } = useFetch(fetchAllNews);

  if (loadingNews || loadingAll) return <p>Yükleniyor...</p>;
  if (errorNews || errorAll) return <p>Veriler alınırken hata oluştu.</p>;
  if (!news) return <p>Haber bulunamadı.</p>;

  return (
    <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
      {/* Sol Menü – Haber listesi */}
      <div className="w-full md:w-[480px] bg-white border-b md:border-r border-gray-300 md:border-b-0 md:h-screen overflow-y-auto">
        <ul className="flex flex-col divide-y divide-gray-200">
          {allNews.map((item, index) => (
            <li
              key={item._id}
              onClick={() => router.push(`/pages/news/${item._id}`)}
              className={`cursor-pointer hover:bg-gray-100 transition ${
                item._id === id ? "bg-yellow-100" : ""
              }`}
            >
              <NewsCard
                id={item._id}
                title={item.title}
                summary={item.summary}
                PublishTime={item.publishedAt}
                imageLink={item.coverImage}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Sağ Panel – Haber Detay */}
      <div className="flex-1 bg-yellow-50 p-4 md:p-8 border-t-0 md:border-l-0 md:border-t-0 h-full md:h-screen overflow-y-auto">
        <div className="text-black">
          <div className="flex flex-col">
            <h1 className="mb-4 text-xl md:text-2xl font-bold">{news.title}</h1>

            <p className="text-sm text-gray-600 mb-4">{news.summary}</p>

            <div className="flex flex-col justify-end pt-8 pb-2">
              <img
                className="w-full max-w-2xl mx-auto object-cover"
                src={news.coverImage}
                alt={news.title}
                width={600}
                height={400}
              />
            </div>

            <div className="mt-4 text-sm md:text-base whitespace-pre-wrap leading-relaxed">
              {news.content || loremIpsum}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
