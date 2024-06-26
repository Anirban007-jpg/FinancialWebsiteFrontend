'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { isAuth } from '../../../actions/auth'
import { useRouter } from 'next/navigation'


const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "MultiBlogging Website",
      desc: "This is a multiBlogging website built using mongodb,framer motion , taiwncss and nextjs with nodejs and expressjs with authentication and authorisation.",
      img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://seoblog-three.vercel.app/",
    },
    {
        id: 2,
        color: "from-green-300 to-yellow-300",
        title: "React Social Media Website",
        desc: "This is a Social media website built using MERN stack.",
        img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link: "https://social-media-network-100.vercel.app/",
    },
  
]

const MyWorksComponenet = () => {

    const ref = useRef();
    const itemRef = useRef();
    const {scrollYProgress} = useScroll({target:ref});

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const router = useRouter();

    useEffect(() => {
        if (isAuth() && isAuth().role === 'Individual'){
          router.push('/Individual/Dashboard')
        } else if (isAuth() && isAuth().role === 'Company'){
          router.push('/Company/Dashboard')
        } 

        // setInterval(() => {
        //     items.forEach((item) => {
        //         if (document.getElementById(item.id)){
        //             document.getElementById(item.id).scrollIntoView();
        //         }
        //     })
        // }, 1000);
      }, [])

    return (
        <motion.div className="h-[130vh]" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            <div className='h-full relative' ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
                    <div className='sticky w-full top-0 flex h-screen gap-4 items-center kam'>
                        <motion.div style={{x}} transition={{ when: "beforeChildren",staggerChildren: 0}} className='flex'>
                        {items.map(item => (<div id={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                            <div className='flex flex-col gap-8 text-white'>
                                <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
                                <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                                    <Image src={item.img} alt='' fill />
                                </div>
                                <p className='w-80 text-black font-bold font-md md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px]'>{item.desc}</p>
                                <Link className='flex justify-end smm:flex smm:justify-end mdd:flex mdd:justify-end md:flex md:justify-end sm:flex sm:justify-end' href={item.link} target="_blank" ><button className='p-2 text-sm font-bold md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 m-2 rounded'>Visit</button></Link>
                            </div>
                            </div>))}
                        </motion.div>
                    </div>
            </div>
        </motion.div>
  )
}

export default MyWorksComponenet