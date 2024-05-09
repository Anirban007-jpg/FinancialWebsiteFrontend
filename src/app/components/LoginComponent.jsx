'use client'
import React, { useEffect, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authenticate, authenticateforcompanyuser, companysignin, isAuth, signin } from '../../../actions/auth';

const LoginComponent = () => {

  const [values,setValues] = useState({
    role: "",
    PAN_No : "",
    TAN_No : "",
    password: "",
    error: ""
  });

  const router = useRouter();

  useEffect(() => {
    if (isAuth() && isAuth().role === 'Individual'){
      router.push('/Individual/Dashboard')
    } else if (isAuth() && isAuth().role === 'Company'){
      router.push('/Company/Dashboard')
    }
  }, [])


  const {role,PAN_No,TAN_No,password} = values;

  const handleChangeInput = (name) => e => {
    setValues({...values, error: '', [name]: e.target.value}) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values, loading: true, error:''});
    if (role === "Individual"){
      const user = {PAN_No,password};
      signin(user)
        .then(data =>{
        if(data.error){
            setValues({...values, error: data.error, loading:false});
        }else {
            // save user token to cookie
            // save user info to localstorage
            // authenticate user
            authenticate(data, () => {
                router.push('/Individual/Dashboard')
            })
        }
      })
    }else if (role === "Company"){
      const user = {TAN_No,password};
      companysignin(user)
        .then(data =>{
        if(data.error){
            setValues({...values, error: data.error, loading:false});
        }else {
            // save user token to cookie
            // save user info to localstorage
            // authenticate user
            authenticateforcompanyuser(data, () => {
                router.push('/Company/Dashboard')
            })
        }
      })
    }     
  }


  return (
    <motion.div className="h-full mt-20" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
        <section className='h-screen flex items-center justify-center'>
          <div className='bg-gray-100 flex rounded-2xl shadow-lg w-4xl p-5 items-center'>
            {/* LEFT SIDE*/}
            <div className='md:w-1/2 mdd:w-full px-10'>
              <h2 className='font-extrabold text-3xl text-blue-950 text-center underline uppercase mb-10'>Login</h2>
              <p className='font-semibold mt-4 mb-7 text-sm text-pink-700 text-center underline'>Already a member ?.. Please sign in !!!</p>
              <form className='md:flex mdd:flex md:flex-col mdd:flex-col flex flex-col gap-4' onSubmit={handleSubmit}>
                {role == "" && (
                  <>
                    <div className='py-4 grid grid-cols-1 gap-4'>
                <div className='relative'>
                  <select value={role} onChange={handleChangeInput("role")} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Choose a role</option>
                    <option value="Company">Company</option>
                  <option value="Individual">Individual</option>
                  </select>
                </div>
            </div>
                  </>
                )}
              
               {role == "Individual" &&  (
                <>
                <div className='py-4 grid grid-cols-1 gap-4'>
                  <div className='relative mt-8'>
                    <input value={PAN_No} onChange={handleChangeInput("PAN_No")} type='text' className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">PAN No</label> 
                  </div>
                </div>
                <div className='py-4 grid grid-cols-1 gap-4'>
                  <div className='relative mt-0'>
                    <input type="password" value={password} onChange={handleChangeInput("password")} className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label> 
                  </div>
                </div>
                </>
              )}
               
               {role == "Company" &&  (
                <>
                <div className='py-4 grid grid-cols-1 gap-4'>
                  <div className='relative mt-2'>
                    <input type="text" value={TAN_No} onChange={handleChangeInput("TAN_No")} className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">TAN No</label> 
                  </div>
                </div>
                <div className='py-4 grid grid-cols-1 gap-4'>
                  <div className='relative mt-0'>
                    <input type="password" value={password} onChange={handleChangeInput("password")} className="block p-2 rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label> 
                  </div>
                </div>
                </>
              )}
                <button className='bg-blue-500 rounded-xl text-white py-2'>Login</button>
                <p className='mt-0 text-sm text-red-500 text-center font-bold py-4'><Link href="/forgotpassword">Forgot Password ?</Link></p>
              </form>
              <div className='mt-5 grid grid-cols-1 items-center text-gray-500'>
                <hr className='border-gray-500'/>
                <p className='text-center font-bold font-sm'>OR</p>
                <hr className='border-gray-500'/>
              </div>
              <button className='bg-blue-300 rounded-xl mt-5 flex justify-center items-center border w-full text-white py-2'><FaGoogle className='mr-3' />Login with Google</button>
              
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

export default LoginComponent