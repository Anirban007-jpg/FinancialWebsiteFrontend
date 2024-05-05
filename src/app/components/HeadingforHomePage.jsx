'use client'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const HeadingforHomePage = () => {
    const [text]= useTypewriter({
        words: ['get detailed Insights'],
        loop: {},
        typeSpeed:90,
        deleteSpeed:80
      })

  return (
    <>
        <h1 className='text-3xl mt-12 lg:text-3xl md:text-6xl font-bold text-center justify-center'>
          Analyze ur Finacial Data & {text}
        </h1>
    </>
  )
}

export default HeadingforHomePage