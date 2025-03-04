"use client"

import { DotPattern } from "@/components/magicui/dot-pattern";
import Preloader from "@/components/PreLoader";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'auto'
    }, 2000)
  }, [])

  return(
    <div className="absolute inset-0 -z-10 h-full w-full bg-white-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <main className='relative w-screen bg-[#f0f3ec]'>
        <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
        </AnimatePresence>
      </main>
    </div>  
  )
}

