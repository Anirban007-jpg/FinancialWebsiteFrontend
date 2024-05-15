'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sections/Sidebar'
import Main from './Sections/Main'
import { FaUser } from 'react-icons/fa'
import { isAuth, signout } from '../../../../../actions/auth'
import { useRouter } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'
import Link from 'next/link'



const Dashboard = () => {

  const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isAuth()) {
      setData(isAuth());
    }

  }, [])

  // window.addEventListener("touchstart", () => {
  //   if (!isAuth()) {
  //     signout(() => router.push('/'))
  //   }
  // })



  // console.log(data);

  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
        <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
          <div>
            <h1 className='text-2xl text-black font-semibold'>Dashboard Page</h1>
          </div>
          <div className='flex justify-between items-center gap-10'>
            <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all' />
            <div id="client-info" className='flex justify-center items-center gap-4'>
              <Link href={`${data.profile}`}><img src="/download.png" alt='client-image' className='rounded-full w-12 h-12 bg-white' /></Link>
              <div className='flex flex-col justify-center items-start'>
                <div className='flex justify-center text-black items-center -mb-1 gap-2'>
                  <h1 className='text-lg font-bold text-black'>Hi, {data.Name}</h1>
                </div>
                <p className='text-black'>{data.role}</p>
              </div>
            </div>
          </div>
        </section>
        <div id="main-section" className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen'>
          <div id="left" className='col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full'>
            {/* three grid layout */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4'>
              <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-md text-black font-extrabold '>Users</h1>
                  <h1 className='text-green-600 font-bold'>Newly Joined</h1>
                </div>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-3xl text-black font-semibold'>30</h1>
                    <p className='text-slate-700'>followers</p>
                  </div>
                  <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                    <FaUser className='w-[30px] h-[30px]' />
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col justify-center items-center bg-red-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-md text-black font-extrabold '>Users</h1>
                  <h1 className='text-green-600 font-bold'>Newly Joined</h1>
                </div>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-3xl text-black font-semibold'>30</h1>
                    <p className='text-slate-700'>followers</p>
                  </div>
                  <div className='bg-red-400 hover:bg-red-500 cursor-pointer text-black p-3 rounded-full'>
                    <FaUser className='w-[30px] h-[30px]' />
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-md text-black font-extrabold '>Users</h1>
                  <h1 className='text-green-600 font-bold'>Newly Joined</h1>
                </div>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-3xl text-black font-semibold'>30</h1>
                    <p className='text-slate-700'>followers</p>
                  </div>
                  <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                    <FaUser className='w-[30px] h-[30px]' />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right section */}
          <div id="right" className='p-2 flex flex-col justify-center items-center gap-4 h-full'>
            <div id='top' className='border-[2px] border-s bg-transparent p-8 w-full border-red-600 rounded-xl flex flex-col justify-center items-center gap-6 h-fit'>
              <div id='image-box' className='w-full flex flex-col justify-center items-center gap-4'>
                <img src='/download.png' alt='' className='rounded-full w-[100px] h-[100px] bg-white' />
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-black font-bold text-2xl'>{data.Name}</h1>
                  <p className='text-green-900 text-lg font-semibold'>{data.Email}</p>
                </div>
              </div>
              <div id="user-income-details" className='flex justify-between items-center gap-4 w-full'>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-2xl text-black font-semibold'>193</h1>
                  <p className=''>Income</p>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-2xl text-black font-semibold'>193</h1>
                  <p className=''>Income</p>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-2xl text-black font-semibold'>193</h1>
                  <p className=''>Income</p>
                </div>
              </div>
            </div>
            <div id='bottom' className='bg-transparent border-s-gray-500 border-[1px] w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8'>
              <div className='flex md:flex-row flex-col justify-between items-center w-full gap-2'>
                <h1 className='text-black text-bold text-md'>Will be developed later</h1>
              </div>
            </div>
          </div>

        </div>
      </Main>
    </div>
  )
}

export default Dashboard