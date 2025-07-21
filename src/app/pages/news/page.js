"use client";
import CategoriesMenu from "@/app/components/CategoriesMenu";
import Link from "next/link";
import useFetch from "@/app/hooks/useFetch";
import { fetchAllNews } from "@/app/axioService/allFetchNews";

export default function Page() {
  const {
    data: news,
    loading: loadingNews,
    error: errorNews,
  } = useFetch(fetchAllNews);
  if (loadingNews) return <p>Haberler Yükleniyor...</p>;
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
            <li
              key={item._id ?? index}
              className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center items-start "
            >
              <div className="absolute top-4 font-bold text-4xl opacity-25">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="self-start text-xs text-black opacity-50">
                {" "}
                3 saat önce{" "}
              </p>

              <p className="mt-2 mb-2 font-bold ">{item.title}</p>
              <img
                className="pb-4 "
                src="/images/14.png"
                alt="Görsel"
                width={260}
                height={150}
              />
              <p className="text-sm mb-2 text-[#95989A] font-[Poppins]">
                {item.summary}
              </p>
              <Link href={`/pages/news/${item._id}`}>
                <button className="self-start bg-white hover:bg-orange-50 px-4 py-2 font-bold text-black border border-[#DEDEDE]">
                  DETAY
                </button>
              </Link>
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
