"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";


export default function Home() {

   const news =[
      {
         _id: "1",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "2",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "3",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "4",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "5",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "6",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "7",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "8",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "9",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "10",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "11",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "12",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "13",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "14",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "15",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "16",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "17",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "18",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "19",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "20",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "21",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "22",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "23",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "24",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "25",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "26",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "27",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "28",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "29",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      },
      {
         _id: "30",
         summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
      }
   ];
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-[#CF161C] text-white">
     
      <div className="flex flex-col ">
        <div className="fixed-top h-20 px-4 py-6">
          <img src="images/logo-white.png" alt="logo" className="h-6 w-12"/>
        </div>
       
        <div className="bg-white h-full w-10"></div>
      </div>

  
      <div className="flex-grow p-10 flex flex-col justify-between top-0 bottom-0 m-auto">
        <div className="px-15">
          <div className="text-xl text-[25px] leading-[30px] font-bold font-[Abril_Fatface] mt-4">26.07.2025</div>
          <div className="mb-4 text-[130px] leading-[100px] font-bold font-[Abril_Fatface] text-leading-tight">
            Bugün <br /> ne oldu?
          </div>
         
          <div className="mb-4 text-xs">
            {news.length > 0 ? news[0].summary : "Haber yok"}
          </div>
          <div className="flex flex-row gap-4 items-center">
          
            <div className="flex flex-col gap-1.5">
              <div className="h-[0.25px] w-9 bg-white"></div>
              <div className="h-[0.25px] w-9 bg-white"></div>
              <div className="h-[0.25px] w-9 bg-white"></div>
              <div className="h-[0.25px] w-9 bg-white"></div>
              <div className="h-[0.25px] w-9 bg-white"></div>
              <div className="h-[0.25px] w-9 bg-white"></div>
            </div>

            <Link href="/pages/news">
               <button type="button" className="bg-white px-4 py-2 font-bold text-red-500">
               GÖRÜNTÜLE
               </button>
            </Link>
          </div>
        
          <div className="text-[8px] mt-10 absolute bottom-0 p-3">
            Copyright © 2017 - Tüm hakları saklıdır. <br />
            Habertürk Gazetecilik A.Ş.
          </div>
        </div>
      </div>

   
      <div className="bg-white hidden lg:block lg:w-[400px] p-6 lg:h-screen">
        <div className="relative z-30 h-full w-full overflow-y-auto text-black
        [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]
        [mask-size:100%_100%] [mask-repeat:no-repeat]">
          <div className="relative z-30 h-full w-full overflow-y-auto text-black
          [mask-image:linear-gradient(to_top,transparent_0%,black_30%)]
          [mask-size:100%_100%] [mask-repeat:no-repeat]">
           
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white z-10 pointer-events-none" />

            <ul className="text-xl flex flex-col gap-4 pl-15 px-10 text-center border-t border-black pt-4 font-[Poppins]">
              {news.map((item, index) => (
                <li key={item._id ?? index} className="border-b border-black pb-4">
                  <div className="font-bold text-5xl h-[25px] overflow-hidden opacity-10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {item.summary}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-50 bg-white w-10 h-screen p-6 hidden lg:block"></div>
      
    </main>
  );
}