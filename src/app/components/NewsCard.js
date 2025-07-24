"use client";
import Link from "next/link";

export default function NewsCard({ id, title, summary, PublishTime, imageLink, index }) {
  return (
        <div
          className="relative h-full border-r border-gray-300 hover:bg-orange-50 px-4 min-w-[280px] max-w-[280px] flex flex-col justify-center items-start"
        >

          {/* <div className="absolute top-4 font-bold text-4xl opacity-25">{id}</div> */}
          <div className="absolute top-4 font-bold text-4xl opacity-25">
                {String(index + 1).padStart(2, "0")}
              </div>
          <p className="text-xs text-black opacity-50">{PublishTime}</p>
          <p className="mt-2 mb-2 font-bold">
            {title}
          </p>
            <img className="pb-4" src={imageLink} alt="Görsel" width={260} height={150}/>
          <p className="text-sm mb-2 text-[#95989A] ">
            {summary}
          </p>
          <Link href={`/pages/news/${id}`}>
            <button className="px-4 py-2 font-bold text-black border border-[#DEDEDE]">DETAY</button>
          </Link>
           
        </div>
  );
}
