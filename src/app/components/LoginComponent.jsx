'use client'
import React from 'react'
import { motion } from 'framer-motion'

const LoginComponent = () => {
  return (
    <motion.div className="h-[110vh] mt-6 overflow-hidden" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <section>
          Hello
        </section>
    </motion.div>
  )
}

export default LoginComponent