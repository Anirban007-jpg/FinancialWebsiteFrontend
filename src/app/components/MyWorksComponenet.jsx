'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "MultiBlogging Website",
      desc: "This is a multiBlogging website built using mongodb,framer motion , taiwncss and nextjs with nodejs and expressjs with authentication and authorisation.",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://seoblog-three.vercel.app/",
    },
  
]

const MyWorksComponenet = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref});

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-0%"]);

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
            <div className='h-[600vh] relative' ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
                    <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                        <motion.div style={{x}} className='flex'>
                        {items.map(item => (<div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                            <div className='flex flex-col gap-8 text-white'>
                                <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
                                <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                                    <Image src={item.img} alt='' fill />
                                </div>
                                <p className='w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px]'>{item.desc}</p>
                                <Link className='flex justify-end' href={item.link} target="_blank" ><button className='p-2 text-sm font-bold md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 m-2 rounded'>Visit</button></Link>
                            </div>
                            </div>))}
                        </motion.div>
                    </div>
            </div>
        </motion.div>
  )
}

export default MyWorksComponenet