'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import { FaBookDead, FaBookMedical, FaBookReader, FaUser } from 'react-icons/fa'
import Main from '../Common/Sections/Main'
import { isAuth } from '../../../../../actions/auth'
import LedgerCreateFormComponent from '../Common/Sections/Ledger/LedgerCreateFormComponent'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'

const LedgerDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(isAuth());
  }, [])

  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
        <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
          <div>
            <h1 className='text-2xl text-black font-semibold'>Ledger Page</h1>
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
        <div id="main-section" className='grid lg:grid-cols-1 grid-cols-1 gap-4 w-full h-screen'>
          <div id="left" className='col-span-1 p-2 gap-0 flex flex-col justify-between items-center h-full'>
            {/* three grid layout */}

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mb-0'>
              <Link href="/Individual/Display/Ledgers">
                <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                  <div className='w-full flex justify-between items-center'>
                    <h1 className='text-md text-black font-extrabold '>Display Ledgers</h1>
                    <h1 className='text-green-600 font-bold'>Multiple</h1>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start gap-1'>
                      <h1 className='text-3xl text-black font-semibold'><Link href="/Individual/Display/Ledgers"></Link></h1>
                    </div>
                    <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                      <Link href="/Individual/Display/Ledgers"><FaBookReader className='w-[30px] h-[30px]' /></Link>
                    </div>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
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
              <Link href="/Individual/Create/Debtors">
                <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                  <div className='w-full flex justify-between items-center'>
                    <h1 className='text-md text-black font-extrabold '>Debtor</h1>

                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start gap-1'>
                      <h1 className='text-3xl text-black font-semibold'>Create and Assign Debtor</h1>
                    </div>
                    <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                      <FaUser className='w-[30px] h-[30px]' />
                    </div>
                  </div>
                </div>
              </Link>
              <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
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
        <div className='smm:mt-32 lg:mt-0 mdd:mt-20 lgg:mt-[-2350px] w-screen lgg:h-full lgg:relative'>
          <LedgerCreateFormComponent />
        </div>
      </Main>
    </div>
  )
}

export default LedgerDashboard