"use client";

import CategoriesMenu from "../../../components/CategoriesMenu";
import NewsCard from "../../../components/NewsCard";

import useFetch from "@/app/hooks/useFetch";
import { fetchAllNews } from "@/app/axioService/allFetchNews";
import { useFetchById } from "@/app/hooks/useFetch";
import { fetchNewsById } from "@/app/axioService/allFetchNews";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

const newsImages = {
    '01': '/assets/14/14.png',
    '02': '/assets/19/19.png',
    '03': '/assets/11/11.png',
    '04': '/assets/12/12.png',
    '05': '/assets/13/13.png',
    '06': '/assets/15/15.png',
    '07': '/assets/16/16.png',
    '08': '/assets/17/17.png',
    '09': '/assets/18/18.png',
    '10': '/assets/11/11.png',
};
const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
`

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  let [selectedItem, setSelectedItem] = useState(null);
  selectedItem = id ? String(id).padStart(2, '0') : null;


  // Set the selected item when the router query is available
  useEffect(() => {
      if (id && !selectedItem) {
          
          const detailedId = String(id).padStart(2, '0');
          if (newsImages[detailedId]) {
              setSelectedItem(detailedId);
          }
      }
  }, [id, selectedItem]);
  
  const {
    data: news,
    loading,
    error,
  } = useFetchById(() => id ? fetchNewsById(id) : Promise.resolve(null), [id]);
  console.log("Detay haber verisi:", news);
  if (loading) return <p>Haberler yükleniyor...</p>;
  if (error) return <p>Haberler alınırken hata oluştu.</p>;
  if (!news) return <p>Haber bulunamadı.</p>;
  
  
  


  // Haberleri sayısal sıraya göre sırala
  // const sortedNewsItems = Object.keys(newsImages).sort((a, b) => parseInt(a) - parseInt(b));

  return (
      <main className="flex flex-col min-h-screen bg-white md:flex-row m-0 p-0">
          {/* Left Section (News List) - Top on mobile, scrollable horizontally */}
          <div className="w-[480px] bg-white border-b md:border-r border-gray-300 md:border-b-0 overflow-x-auto md:overflow-y-auto md:h-screen">
              <ul className="flex flex-row text-black text-sm w-full whitespace-nowrap md:flex-col">
                {news.map((item, index) => (
                  <li key={item._id || index} className='h-full'>
                    <NewsCard id={item._id} title={item.title} summary={item.summary} PublishTime={item.publishedAt} imageLink={item.coverImage} index={index} />

                  </li>
                ))}
              </ul>
          </div>

          {/* Right Section (Details) - Bottom on mobile, full width */}
          <div className="flex-1 bg-yellow-50 p-4 md:p-8 border-t-0 md:border-l-0 md:border-t-0 h-full md:h-screen overflow-y-auto">
              <div className="text-black">
                  {selectedItem ? (
                      <div className="flex flex-col">
                          <h1 className="mb-4 text-xl md:text-2xl font-bold">
                              Haber {selectedItem}
                          </h1>
                          {/* Fotoğraf: Alt border'a yakın */}
                          <div className="flex flex-col justify-end pt-8 pb-2">
                              <img
                                  className="w-full max-w-2xl mx-auto object-cover"
                                  src={newsImages[selectedItem]}
                                  alt={`Haber ${selectedItem}`}
                                  width={600}
                                  height={400}
                              />
                          </div>
                          {/* Lorem Ipsum Metni */}
                          <div className="mt-4 text-sm md:text-base">
                              {loremIpsum.split('\n\n').map((paragraph, index) => (
                                  <p key={index} className="mb-4">
                                      {paragraph}
                                  </p>
                              ))}
                          </div>
                      </div>
                  ) : (
                      <div className="mb-4 text-xl md:text-2xl font-bold">
                          Bir haber seçin
                      </div>
                  )}
              </div>
          </div>
      </main >
  );
}

Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
