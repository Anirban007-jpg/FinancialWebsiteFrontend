'use client'
import React from 'react'
import { motion } from 'framer-motion'

const LoginComponent = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <div>LoginComponent</div>
    </motion.div>
  )
}

export default LoginComponent