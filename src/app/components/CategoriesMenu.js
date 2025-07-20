
"use client"
import { useState } from "react";
import Link from "next/link";

export default function CategoriesMenu({children}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <main className="fixed h-screen w-screen flex" 
        >
          {/* Sidebar has 3 components */}
          <div
          
          
            className={`z-20 w-25 h-screen ${isOpen ? 'bg-[#cf151c]' : 'bg-white'} flex flex-col items-center justify-between border-r border-gray-800 transition-all duration-500 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Logo Section */}
            <Link
              href="/"
              // Conditionally add 'pointer-events-none' to disable the link when the menu is open
              className={`z-40 bg-[#cf151c] w-full ${
                isOpen ? 'h-screen pointer-events-none' : 'h-[200px]'
              } transition-all duration-500`}

              onClick={(e) => {
                if(!isOpen)
                  e.stopPropagation(); // Prevents the parent's onClick from firing
              }}
            >
              <div className="flex justify-center py-4 text-white text-lg font-bold w-20 h-16 p-4">
                <img src="/images/logo-white.png" alt="Logo" />
              </div>
            </Link>
            
            {/* Expand Indicator: CROSS or VERTICAL-LINE */}
            <div className="z-40 absolute top-0 bottom-0 m-auto h-12"
            >
              <div className={`top-0 bottom-0 m-auto h-full flex ${isOpen ? '' : 'gap-2'}`}>
                <div className={`h-full ${isOpen ? 'w-px bg-white -rotate-45' : 'w-0.5 bg-gray-600'} transition-all duration-500`}></div>
                <div className={`h-full ${isOpen ? 'w-px bg-white rotate-45' : 'w-0.5 bg-gray-600'} transition-all duration-500`}></div>
              </div>
            </div>
    
            {/* Circle Symbol */}
            <div className="z-40 p-8">
              <div className={`flex h-4 w-4 rounded-full ${isOpen ? 'bg-white' : 'bg-[#cf151c]'} transition-all duration-500`}></div>
            </div>
            
                
          </div>
    
          {/* Expanded Menu as Compound Component */}
          <div className={`z-10 absolute top-0 bg-[#cf151c] ${isOpen ? 'w-screen left-20' : '-left-[580px]'} h-screen transition-all duration-500 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="p-8">
              <div className="absolute top-0 bottom-0 m-auto flex items-center">
                <ul className="text-5xl text-white font-bold flex flex-grow flex-col justify-center space-y-4"                >
                  <li className="z-40 transition-colors hover:text-[#980C10]"><Link href="/"> Anasayfa</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/gundem/news">Gündem</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/ekonomi/news">Ekonomi</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/spor/news">Spor</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/magazin/news">Magazin</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/dunya/news">Dünya</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/teknoloji/news">Teknoloji</Link></li>
                  <li className="transition-colors hover:text-[#980C10]"><Link href="/categories/saglik/news">Sağlık</Link></li>
                </ul>
              </div>
    
              <div className="absolute bottom-10">
                
                <div className="absolute bottom-10">
                  <ul className="py-4 flex text-white text-xl gap-3 *:transition-colors">
                    <li className="hover:opacity-80">
                      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                      <img src="/assets/Group420.svg" alt="Search" className="h-6 w-6" />
                      </Link>
                    </li>
                    <li className="hover:opacity-80">
                      <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="/assets/Path 2319.svg" alt="Notifications" className="h-6 w-6" />
                      </Link>
                    </li>
                    <li className="hover:opacity-80">
                      <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src="/assets/Group428.svg" alt="LinkedIn" className="h-6 w-6" />
                      </Link>
                    </li>
                  </ul>
                </div>
    
                <div className="text-xs text-white">
                  Copyright © 2007 - Tüm hakları saklıdır. <br />
                  Habertürk Gazetecilik A.Ş
                </div>
              </div>
            </div>
    
          </div>
          
          <div class="w-full h-full">
          {children}
          </div>
    
        </main>
  );
}
