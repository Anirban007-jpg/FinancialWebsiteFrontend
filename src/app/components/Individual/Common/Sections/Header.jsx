'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoArrowDown, IoSearch } from 'react-icons/io5'
import { isAuth } from '../../../../../../actions/auth'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {

  const pathname  = usePathname();

  const [data, setData] = useState({});

  useEffect(() => {
    setData(isAuth());
  }, [])
  
 

  return (
    <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
        <div>
            <h1 className='text-2xl text-white font-semibold'>{pathname.substring(12)} Page</h1>
        </div>
        <div className='flex justify-between items-center gap-10'>
          <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all'/>
          <div id="client-info" className='flex justify-center items-center gap-4'>
            <Link href="#"><img src="/download.png" alt='client-image' className='rounded-full w-12 h-12 bg-white'/></Link>
            <div className='flex flex-col justify-center items-start'>
              <div className='flex justify-center text-white items-center -mb-1 gap-2'>
                <h1 className='text-lg font-bold text-white'>Hi, {data.Name}</h1>
              </div>
              <p className='text-white'>{data.role}</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Header