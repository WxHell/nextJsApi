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
  if(loading) return <p>Haberler yükleniyor...</p>
  if(error) return <p>Haberler alınırken hata oluştu</p>
  if(!news) return <p>Haber bulunamadı</p>
 
 
 
  return (
    <main className="flex min-h-screen flex flex row relative">
      <div className="flex w-[400px] items-center bg-[#FFF] p-8 border-r">
        <div className="text-black">
          <div className="text-2xl font-[Poppins] opacity-50">26.07.2025</div>
          <div className="mb-4 text-4xl font-bold font-[AbrilFatface]">
            Bugün ne oldu?
          </div>
          <div className="text-[15px] text-[#95989A] font-[Poppins]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
            <li key={item._id || index} className='h-full'>
              <NewsCard id={item._id} title={item.title} summary={item.summary} PublishTime={item.publishedAt} imageLink={item.coverImage} index={index} />

            </li>
          ))}
          {/* <NewsCard id="02" title="Consectetur Adipiscing Elit" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." PublishTime="2 saat önce" />
          <NewsCard id="03" title="Sed Do Eiusmod Tempor" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." PublishTime="1 saat önce" />
          <NewsCard id="04" title="Incididunt Ut Labore Et Dolore" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." PublishTime="45 dakika önce" />
          <NewsCard id="05" title="Magna Aliqua Ut Enim Ad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." PublishTime="30 dakika önce" />
          <NewsCard id="06" title="Ut Enim Ad Minim Veniam" description="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." PublishTime="20 dakika önce" />
          <NewsCard id="07" title="Duis Aute Irure Dolor" description="In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." PublishTime="15 dakika önce" />
          <NewsCard id="08" title="Excepteur Sint Occaecat Cupidatat" description="Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." PublishTime="10 dakika önce" />
          <NewsCard id="09" title="Sunt In Culpa Qui Officia" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." PublishTime="5 dakika önce" />
          <NewsCard id="10" title="Deserunt Mollit Anim Id Est" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." PublishTime="Şimdi" /> */}
        </ul>
      </div>
    </main>
  );
}



Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};