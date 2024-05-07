'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { forgotPassword, forgotPasswordforcompanyusers, resetPassword } from '../../../actions/auth';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';


const ResetPasswordComponent = () => {

    const [values,setValues] = useState({
        newPassword: "",
        loading: false,   
        error: '',
        message: '',
      });
  
      const router = useRouter();
      const params = useParams();
      const id = params.id;
    
      const {newPassword,error,message,loading} = values;
  
      const handleChange = (name) => e => {
          setValues({...values, error: '', [name]: e.target.value});
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, loading: true, error:''});
        // console.log(...values)
        resetPassword({
            newPassword,
            resetPasswordLink: id
        }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, showForm: false, newPassword: '' });
            } else {
                setValues({ ...values, message: data.message, showForm: false, newPassword: '', error: false });
                router.push('/')
            }
        });
      }      


  return (
    <motion.div className="h-full mt-20" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
    <section className='h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg w-4xl p-5 items-center'>
        {/* LEFT SIDE*/}
        <div className='md:w-1/2 mdd:w-full px-10'>
          <h2 className='font-extrabold text-2xl text-blue-950 text-center underline uppercase mb-2'>Reset your password</h2>
          <form className='md:flex mdd:flex md:flex-col mdd:flex-col flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='py-4 grid grid-cols-1 gap-0'>
              <div className='relative mt-2'>
                <input type="password" value={newPassword} onChange={handleChange("newPassword")} className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">New Password</label> 
              </div>
            </div>
            <button className='bg-blue-500 rounded-xl text-white py-2'>Reset Password</button>
           
            {message && (
                  <span className="text-green-600 text-center mb-3 font-semibold mt-5">
                    {message}
                  </span>
                )}
                {error && (
                  <span className="text-red-600 text-center mb-3 font-semibold mt-5">
                    {error}
                  </span>
                )}
        </form>
        </div>
         
        {/* LEFT SIDE*/}
        <div className=' md:block mdd::block hidden w-1/2'>
          <img className="rounded-2xl h-[650px]" src="/bg-jpg.jpg" alt='' />
        </div>
      </div>
    </section>
    </motion.div>
  )
}

export default ResetPasswordComponent