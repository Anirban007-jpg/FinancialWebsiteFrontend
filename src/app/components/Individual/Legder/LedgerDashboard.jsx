'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import { FaBookDead, FaBookMedical, FaBookReader, FaUser } from 'react-icons/fa'
import Main from '../Common/Sections/Main'
import { isAuth } from '../../../../../actions/auth'
import LedgerCreateFormComponent from '../Common/Sections/Ledger/LedgerCreateFormComponent'
import Link from 'next/link'

const LedgerDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(isAuth());
  }, [])

  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
        <div id="main-section" className='grid lg:grid-cols-1 grid-cols-1 gap-4 w-full h-screen'>
          <div id="left" className='col-span-1 p-2 gap-0 flex flex-col justify-between items-center h-full'>
            {/* three grid layout */}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mb-0'>
              <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-md text-black font-extrabold '>Display Ledgers</h1>
                  <h1 className='text-green-600 font-bold'>Multiple</h1>
                </div>
                <div className='w-full flex justify-between items-center'>
                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-3xl text-black font-semibold'><Link href="/Individual/Display/Ledgers">Click Here to see all Ledgers</Link></h1>
                  </div>
                  <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                  <Link href="/Individual/Display/Ledgers"><FaBookReader className='w-[30px] h-[30px]' /></Link>
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-105 cursor-pointer'>
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
              <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-105 cursor-pointer'>
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
              <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-105 cursor-pointer'>
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
        </div>
        <div className='mt-2 lgg:mt-[-850px] w-screen lgg:h-full lgg:relative'>
          <LedgerCreateFormComponent />
        </div>
      </Main>
    </div>
  )
}

export default LedgerDashboard