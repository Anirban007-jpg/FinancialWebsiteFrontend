'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { forgotPassword, forgotPasswordforcompanyusers, isAuth } from '../../../actions/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const ForgotPasswordComponent = () => {
  const [values, setValues] = useState({
    Email: "",
    loading: false,
    error: '',
    message: ''
  });

  const { Email, error, message, loading } = values;

  const handleChange = (name) => e => {
    setValues({ ...values, error: '', [name]: e.target.value, message: '' });
  }

  const router = useRouter();

  useEffect(() => {
    if (isAuth()) {
      router.push('/Individual/Dashboard')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '' });
    // const data = {registered_email}
    console.log({ ...values })
    forgotPassword({ Email }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, message: data.message, Email: '' });
      }
    });
  }




  return (
    <motion.div className="h-full mt-20" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <section className='h-screen flex items-center justify-center'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg w-4xl p-5 items-center'>
          {/* LEFT SIDE*/}
          <div className='md:w-1/2 mdd:w-full px-10'>
            <h2 className='font-extrabold text-2xl text-blue-950 text-center underline uppercase mb-2'>Reset Passwords for Indivduals</h2>
            <form className='md:flex mdd:flex md:flex-col mdd:flex-col flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='py-4 grid grid-cols-1 gap-4'>
                <div className='relative mt-2'>
                  <input value={Email} type="text" onChange={handleChange("Email")} className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Registered Email</label>
                </div>
              </div>
              <button className='bg-blue-500 rounded-xl text-white py-2'>Send Reset Link</button>
              <p className='mt-0 text-sm text-red-500 text-center font-bold py-4'><Link href="/forgotpasswordforcompany">Having company email, Click here ?</Link></p>
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

export default ForgotPasswordComponent