'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

const MyWorkTransitionProviderComponent = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
    <div key={pathname} className="w-screen absolute h-screen overflow-y-scroll bg-gradient-to-b from-blue-50 to-red-50">
      <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40' animate={{height:"0vh"}} exit={{height:"100vh"}} transition={{duration: 0.5, ease:"easeOut"}}/>
      <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 h-fit w-fit' initial={{opacity: 1}} animate={{opacity:0}} exit={{opacity:0}} transition={{duration: 0.8, ease:"easeOut"}}>{pathname.substring(1)}</motion.div>    
      <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30' initial={{height:"100vh"}} animate={{height:"0vh", transition:{delay:0.5}}} />  
      <div className="h-24">
        <Navbar/>
      </div>
      <div className="h-[calc(100vh-6rem)]">
        {children}
      </div>
    </div>
</AnimatePresence>
  )
}

export default MyWorkTransitionProviderComponent