'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sections/Sidebar'
import Main from './Sections/Main'
import { FaUser } from 'react-icons/fa'
import { isAuth } from '../../../../../actions/auth'



const Dashboard = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData(isAuth());
  }, [])
  
  // console.log(data);
 
  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
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
            <div id='top' className='bg-slate-100 p-8 w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit'>
              <div id='image-box' className='w-full flex flex-col justify-center items-center gap-4'>
                <img src='/download.png' alt='' className='rounded-full w-[100px] h-[100px]'/>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-black font-bold text-2xl'>{data.Name}</h1>
                  <p className='text-slate-700 text-lg fonr-semibold'>{data.Email}</p>
                </div>
              </div>
              <div id="user-income-details" className='flex justify-between items-center gap-8 w-full'>
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
            <div id='bottom' className='bg-gray-200 w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8'>
            <div className='flex md:flex-row flex-col justify-between items-center w-full gap-2'>
              <h1 className='text-white text-md'>Will be developed later</h1>
            </div>
          </div>
          </div>
         
        </div>
      </Main>
    </div>
  )
}

export default Dashboard