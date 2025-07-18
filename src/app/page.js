"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
export default  function NewsList() {
     const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("/api/news")
      .then(res => {
        setNews(res.data.news || []);
      })
      .catch(err => console.error("Haber listeleri alınamadı", err));
  }, []);


  return (
   
    <main className="flex min-h-screen flex-wrap ">
      <div className="flex lg:w-[calc(100%-1140px)] items-center bg-[#FFFFFF] p-8 border-r-4">
       
        <div className="text-[#000000]">
          <div className="fixed top-0 left-0 h-40  w-9 bg-red-600 flex flex-col items-center pt-4">
            <img src="/image/anaSayfaLogo.png" alt="logo" className=" fixed top-1 left-0 w-9 h-5 z-4 px-1" />
          </div>
          

          <div className="text-2xl font [Poppins] opacity-50">26.07.2025</div>
          <div className="mb-4 text-4xl font-bold font-[AbrilFatface]">
            Bugün ne oldu?
          </div>
          <div className="mb-4 text-[9px] opacity-50">
            {news.length > 0 ? news[0].summary : "Haber yok"}
          </div>

        </div>

      </div>
      <div>           
        <footer className=" text-xs text-gray-500 absolute bottom-0 left-4 ">
          <p>
            Copyright ©️ 2017 – Tüm hakları saklıdır. <br />
            Habertürk Gazetecilik A.Ş.
          </p>
          </footer>
      </div>


      <div className="lg:w-[1140px] bg-white overflow-x-auto  h-screen">
        <ul className="text-black  text-sm flex flex-row items-stretch justify-center  h-full w-400 overflow-x-auto">
            
          <li className="relative border-r border-gray-300 transition duration-300 hover:bg-orange-50 pr-4 flex-1 flex flex-col justify-center items-center items-start ">
            <div className="px-4 ">
            <div className="absolute top-4 left-0 font-bold text-4xl pl-4 opacity-25">01</div>
            <p className="self-start text-xs text-black opacity-50  "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4 " src="/image/bg-image.png" alt="Görsel" width={200} height={120}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <button className="self-start bg-white hover:bg-orange-50  px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
           </div>
          </li>

          <li className="relative border-r border-gray-300 transition duration-300 hover:bg-orange-50 pr-4 flex-1 flex flex-col justify-center items-center items-start">
            <div className="px-4">
            <div className="absolute top-4 left-0 font-bold text-4xl opacity-25">02</div>
            <p className="self-start text-xs text-black opacity-50  "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/image/17.png" alt="Görsel" width={200} height={120}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
          </div>
          </li>

          <li className="relative border-r border-gray-300 transition duration-300 hover:bg-orange-50 pr-4 flex-1 flex flex-col justify-center items-center items-start ">
            <div className="px-4 ">
            <div className="absolute top-4 left-0 font-bold text-4xl opacity-25">03</div>
            <p className="self-start text-xs text-black opacity-50  "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/image/18.png" alt="Görsel" width={200} height={120}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300  ">DETAY</button>
            </div>
          </li>

          <li className="relative border-r border-gray-300 transition duration-300 hover:bg-orange-50 pr-4 flex-1 flex flex-col justify-center items-center items-start">
             <div className="px-4 ">

            <div className="absolute top-4 left-0 font-bold text-4xl opacity-25">REKLAM</div>
            <p className="mt-16 mb-4 ">
             <img className="pb-4" src="/image/reklam.png" alt="Görsel" width={200} height={120}/>
            </p>
            </div>
          </li>

          <li className="relative border-r border-gray-300 transition duration-300 hover:bg-orange-50 pr-4 flex-1 flex flex-col justify-center items-center items-start ">
            <div className="absolute top-4 left-0 font-bold text-4xl opacity-25">04</div>
            <div className="px-4 ">
            <p className="self-start text-xs text-black opacity-50  "> 3 saat önce </p>
            <p className="mt-2 mb-2 font-bold ">
              Lorem Ipsum.dkjfşlzkşl şlkdfşlkşlkdf dhshdk sjdkjashdk sjdhakjsdh jsadksj  jsdkhajs jsdkjads jsdkjsdh jadshkjs jhdkasjhk şladkfşlkdf şladkfşkdasş işafsifi lşakdlkdşf askşlksdşl şlaskşlkds alkfsşlksadş laskdjfşlj..
            </p>
            <img className="pb-4" src="/image/19.png" alt="Görsel" width={200} height={120}/>
            <p className="text-sm mb-2 opacity-50">
              Lorem Ipsum sjhkjhsjkd sjdhjksdhd jsdhkjdsh sjkdhkjsdhk jsdhksjdh dkhkadhkd jshdkjshk shdkhs sdhdhkhd kjdkdhj jhkjk...
            </p>
            <button className="self-start bg-white px-4 py-2 font-bold text-black border border-gray-300">DETAY</button>
            </div>
          </li>
        </ul>
      </div>


    </main>

  );
    }
