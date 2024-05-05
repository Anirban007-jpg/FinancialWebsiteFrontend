'use client'
import React from 'react'
import { motion } from 'framer-motion'

const RegisterComponent = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <div>RegisterComponent</div>
    </motion.div>
  )
}

export default RegisterComponent