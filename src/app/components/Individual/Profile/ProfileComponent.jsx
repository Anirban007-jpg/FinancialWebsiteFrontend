'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import Main from '../Common/Sections/Main'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { isAuth } from '../../../../../actions/auth'
import ProfileUpdateFormComponent from '../Common/Sections/Profile/ProfileUpdateFormComponent'

const ProfileComponent = () => {

    const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isAuth()) {
      setData(isAuth());
    }

  }, [])

    return (
        <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
            <Sidebar />
            <Main>
                <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
                    <div>
                        <h1 className='text-2xl text-black font-semibold'>Update Your Profile Here ....</h1>
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
                <ProfileUpdateFormComponent />
            </Main>
        </div>
    )
}

export default ProfileComponent