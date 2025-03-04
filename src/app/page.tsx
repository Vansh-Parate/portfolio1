"use client"

import Preloader from "@/components/PreLoader";
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
  <main className='relative w-screen bg-[#f0f3ec]'>
  <AnimatePresence mode='wait'>
    {isLoading && <Preloader />}
  </AnimatePresence>
  </main>
  )
}