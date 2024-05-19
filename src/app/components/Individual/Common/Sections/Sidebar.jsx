'use client'
import React, { useEffect, useState } from 'react'
import { MdDashboard, MdLogout } from 'react-icons/md';
import {} from 'react-icons/si';
import {} from 'react-icons/lia';
import {} from 'react-icons/io5';
import { FaArrowRight, FaBook, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { signout } from '../../../../../../actions/auth';
import { usePathname, useRouter } from 'next/navigation';

const variants = {
  expanded: {width: "18%"},
  nonExpanded : {width: "5%"}
}

const navItems = [
  {
    name: "Dashboard",
    icon : MdDashboard,
    url : "/Individual/Dashboard",
  },
  {
    name: "Ledger",
    icon : FaBook,
    url : "/Individual/Ledger"
  },
  {
    name: "Debtor",
    icon : FaUser,
    url : "/Individual/Create/Debtors"
  },
  {
    name: "Creditor",
    icon : FaUser,
    url : "/Individual/Create/Creditors"
  }, 
]

const Sidebar = () => {

  const [activeNavIndex,setactiveNavIndex] = useState(0);
  const [isExpanded,setIsExpanded] = useState(true);
  const router = useRouter();

  const pathname = usePathname();
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768){
        setIsExpanded(false);
      }else{
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }

  },[])
  return (
    <motion.section animate= {isExpanded ? "expanded":"nonExpanded"} variants={variants} className={'w-1/5 bg-gray-950 relative z-10 overflow-y-auto overflow-x-visible h-full flex flex-col justify-between items-center gap-10 ' + (isExpanded ? 'py-8 px-6 ' : 'px-8 py-6')}>
      <div className='flex flex-col justify-center items-center gap-8'>
        {isExpanded ? (
          <div id='logo-box'>
            <h1 className='text-red-600 font-bold text-4xl'>DEBUG <span className='italic text-yellow-500'>FINANCIA</span></h1>
          </div>
        ) : (
        <div className='flex justify-center items-center'>
          <h1 className='text-red-600 font-bold text-3xl'>D <span className='italic text-yellow-500 text-3xl'>F</span></h1>
        </div>
        )
      }
        <div id="navlinks-box" className='flex flex-col justify-center items-start gap-5 w-full mt-5'>
        {navItems.map((item, index) => (
          <div key={index} id='link-box' className={'flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl ' + (pathname === item.url ? 'bg-yellow-500 text-black font-extrabold ' : 'text-white ') + (isExpanded ? 'px-6 py-2':'p-2')} onClick={() => setactiveNavIndex(index)}>
            <div className='bg-yellow-300 text-black p-2 rounded-full'>
              <Link href={item.url}><item.icon className='md:w-6 w-4 md:h-6 h-4' /></Link>
            </div>
            <div className={'text-lg ' + (isExpanded ? 'flex' : 'hidden')}> <Link href={item.url}>{item.name}</Link></div>
          </div>
        ))}
        </div>
      </div>

      <div id="expanded-icon" className='bg-yellow-500 text-black p-2 rounded-full cursor-pointer right-3 absolute md:bottom-24 md: lgl:bottom-28 lg:bottom-24 md:flex hidden' onClick={() => setIsExpanded(!isExpanded)}>
        <FaArrowRight size={15} className='z-40'/>
      </div>
      <div id="logout-box" className='w-full flex flex-col justify-start items-center gap-4 cursor-pointer'>
        <div className='bg-slate-700 w-full h-[0.5px]'></div>
        <div className='flex justify-center items-center gap-2'>
          <MdLogout onClick={() => signout(() => router.push("/"))} className='text-white h-6 w-6'/>
          <span className={'text-white text-lg font-bold  cursopr-pointer ' + (isExpanded ? 'flex' : 'hidden')} onClick={() => signout(() => router.push("/"))}>Logout</span>
        </div>
      </div>

    </motion.section>
  )
}

export default Sidebar