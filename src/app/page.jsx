'use client'
import Image from "next/image";
import HeadingforHomePage from "./components/HeadingforHomePage";
import { motion } from "framer-motion";
import Link from "next/link";
import TransitionProvider from "./components/TransitionProvider";

const Homepage = () => {
  return (
    <TransitionProvider>
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-20 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-[75%] lg:h-[75%] lg:w-1/2 sm:h-[25%] relative">
          <Image src="/hero.png" alt="" fill className="object-contain"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 mt-4 lg:h-[75%] lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* HEADING */}
            <HeadingforHomePage />
          {/* DESC */}  
            <p className="md:text-xl">Welcome to my Financial online Digital Space, Here u can find out ur taxes and also keep day-to-day transactions and get detailed analysis on them.</p>      
          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white font-semibold"><Link href="/my_works">View My Works</Link></button>
            <button className="p-2 rounded-lg ring-1 ring-black text-yellow font-semibold"><Link href="/contact-us">Contact Us</Link></button>  
          </div> 
        </div>
      </div>
    </motion.div>
    </TransitionProvider>
  );
};

export default Homepage;
