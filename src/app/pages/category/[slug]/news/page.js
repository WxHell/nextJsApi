"use client"
import CategoriesMenu from '../../../../components/CategoriesMenu';
import NewsCard from '../../../../components/NewsCard';
import { useParams } from 'next/navigation';
import { useFetchSlugNews } from '@/app/hooks/useFetch';
import { fetchCategoryByNews } from '@/app/axioService/allFetchNews';

export default function Page() {
  const news = [];
  const {slug} = useParams();
  const {
    data:slugNews,
    loading,
    error,
  } = useFetchSlugNews(() => slug ? fetchCategoryByNews(slug):Promise.resolve(null),[slug] );
  if( loading || !news) return null
  if(error) return <p>Haber alınırken hata oluştu</p>
 
 
 
  return (
    <main className="flex min-h-screen flex flex row relative">
      <div className="flex w-[400px] items-center bg-[#FFF] p-8 border-r">
        <div className="text-black">
          <div className="text-2xl font-[Poppins] opacity-50">26.07.2025</div>
          <div className="mb-4 text-4xl font-bold font-[AbrilFatface]">
            Bugün ne oldu?
          </div>
          <div className="text-[15px] text-[#95989A] font-[Poppins]">
         {slugNews?.[0]?.summary ?? "Haber Yok"}
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
          {slugNews.map((item,index) => (
            index % 4 === 3 ?
              <li className="relative border-r border-gray-300 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center px-4">
                <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">REKLAM</div>
                <img src="/images/reklam.png" alt="Görsel" width={260} height={150}/>
              </li> : 
              <li key={item._id || index} className='h-full'>
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