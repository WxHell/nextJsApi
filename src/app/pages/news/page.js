import Image from 'next/image';
import CategoriesMenu from '../../components/page';
import Link from 'next/link';

export default function Page() {
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
          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center items-start ">
            
            <div className="absolute top-4 font-bold text-4xl opacity-25">01</div>
            <p className="self-start text-xs text-black opacity-50"> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4 " src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 text-[#95989A] font-[Poppins]">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/1">
            <button className="self-start bg-white hover:bg-orange-50 px-4 py-2 font-bold text-black border border-[#DEDEDE]">DETAY</button>
            </Link>
          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">02</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/15.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/2">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>
          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">03</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/19.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/3">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300 ">DETAY</button>
            </Link>
          </li>

          <li className="relative border-r border-gray-300 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center">
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">REKLAM</div>
             <img src="/images/reklam.png" alt="Görsel" width={260} height={150}/>
          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">04</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/4">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>

          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25">05</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/5">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>
         </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25 pl-4">06</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/6">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>
         </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25 pl-4">07</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/7">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>
          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25 pl-4">08</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/8">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>
          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25 pl-4">09</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/9">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>

          </li>

          <li className="relative border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-center ">
            
            <div className="absolute top-4 left-4 font-bold text-4xl opacity-25 pl-4">10</div>
            <p className="self-start text-xs text-black opacity-50 "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/images/14.png" alt="Görsel" width={260} height={150}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <Link href="/pages/news/10">
              <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </Link>

          </li>
        </ul>
      </div>
    </main>
  );
}


Page.getLayout = function getLayout(page) {
  return <CategoriesMenu>{page}</CategoriesMenu>;
};
