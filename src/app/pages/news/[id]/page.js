"use client";

import CategoriesMenu from "../../../components/CategoriesMenu";
import { useFetchById } from "@/app/hooks/useFetch";
import { fetchNewsById } from "@/app/axioService/allFetchNews";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  const {
    data: news,
    loading,
    error,
  } = useFetchById(() => id ? fetchNewsById(id) : Promise.resolve(null), [id]);
  console.log("Detay haber verisi:", news);
  if (loading) return <p>Haberler yükleniyor...</p>;
  if (error) return <p>Haberler alınırken hata oluştu.</p>;
  if (!news) return <p>Haber bulunamadı.</p>;

  return (
    <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
      {/* Sol Kısım - Haber Özeti */}
      <div className="w-[480px] bg-white border-b md:border-r border-gray-300 md:border-b-0 overflow-auto md:h-screen p-6">
        <h2 className="text-xl font-bold mb-4">Haber Özeti</h2>
        <div className="p-6 border border-gray-300 rounded-md bg-yellow-50">
          <div className="font-bold text-lg">{news.title}</div>
          <p className="text-sm text-gray-700 mt-2 ">
            {news.summary.slice(0, 100)}...
          </p>
        </div>
      </div>

      {/* Sağ Kısım - Haber Detayı */}
      <div className="flex-1 bg-yellow-50 p-4 md:p-8 h-full md:h-screen overflow-y-auto">
        <h1 className="mb-4 text-xl md:text-2xl font-bold">{news.title}</h1>
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
          <p className="mb-4">{news.summary}</p>
        </div>
      </div>
    </main>
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
