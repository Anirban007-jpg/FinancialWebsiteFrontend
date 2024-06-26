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
            <div className="lgg:overflow-clip bg-no-repeat w-2/5 bg-gray-500 bg-cover bg-fixed grow h-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center gap-2 p-4">
                <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
                    <div>
                        <h1 className='text-2xl text-black font-semibold'>Update Profile Page</h1>
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
                <div className='border-s border-[2px] bg-red-500 flex flex-row items-center w-full p-2 justify-center rounded-full'>
                    {!data.email_verified && <span className="text-white font-bold text-center mt-0">
                        Your Email Account is not verified...Please <Link href="#">Verify ur Account</Link> ASAP!!!!!
                    </span>}
                </div>
                <div className="flex flex-col w-[60%]">
                    <ProfileUpdateFormComponent />
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent