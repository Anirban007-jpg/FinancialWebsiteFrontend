'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { companySignup, individualSignup } from '../../../actions/auth'
import Link from 'next/link'

const RegisterComponent = () => {

       
  const [values, setValues] = useState({
    role: '',
    Company_Name: '',
    TAN_No: '',
    Company_email: '',
    Company_address: '',
    Company_contact_no:'',
    password: '',
    confirmedPassword: '',
    Name:'',
    PAN_No:'',
    Email:'',
    Address:'',
    Contact_no:'',
    loading:false,
    error: '',
    success: ''
  });

  const [isAccepted, setIsAccepted] = useState(false)

  function handleClick() {
    if(!isAccepted){
      setIsAccepted(!isAccepted);
    }else if(isAccepted){
      setIsAccepted(!isAccepted)
    }
  }

  
  const {role,error,success,Company_Name,TAN_No, Company_email,Company_address,Company_contact_no,password,confirmedPassword,Name,PAN_No,Email,Address,Contact_no,loading} = values;


  const handleChangeInput = (name) => e => {
    setValues({...values, error: '', [name]: e.target.value})
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values, loading: true, error:''});
    if (role == "Company"){
      const company = {Company_Name,TAN_No, Company_email,Company_address,Company_contact_no,password,confirmedPassword,role};
      companySignup(company)
      .then(data =>{
          if(data.error){
              setValues({...values, error: data.error, loading:false});
          }else {
              setValues({...values, 
              role: '',
              Company_Name: '',
              TAN_No: '',
              Company_email: '',
              Company_address: '',
              Company_contact_no:'',
              password: '',
              confirmedPassword: '',
              loading: false,
              error: '',
              success: data.message,
              error: ''
            });
          }
      })
    }else if (role == "Individual"){
      const individual = {password,confirmedPassword,Name,PAN_No,Email,Address,Contact_no,role};
      individualSignup(individual)
      .then(data =>{
          if(data.error){
              setValues({...values, error: data.error, loading:false});
          }else {
              setValues({...values, 
              role: '',
              Name:'',
              PAN_No:'',
              Email:'',
              Address:'',
              Contact_no:'',
              password: '',
              confirmedPassword: '',
              loading: false,
              error: '',
              success: data.message,
              error: ''
            });
          }
      })
    }
   
  }

  return (
    <motion.div className="h-full w-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
      <div className="flex items-center justify-center h-full overflow-scroll">
        {/* <div className='sm:pt-30'></div> */}
        <form className='relative flex flex-col m-6 space-y-8 bg-gray-300 shadow-2xl sm:mt-20 lg:mt-8 md:mt-[550px] rounded-2xl md:flex-row md:space-y-0' onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center p-8 md:p-14'>
            <span className='mb-1 text-3xl font-bold text-center underline uppercase text-blue-500'>Sign up</span>
            <span className='mb-8 text-center text-black font-semibold'>Welcome ! Please Register yourself</span>
            <div className='py-4 grid grid-cols-1 gap-4'>
              <div className='relative'>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Account Group</label>           
                <select value={role} onChange={handleChangeInput('role')} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                    <option value="">Choose Role</option>
                    <option value="Individual">Individual</option>
                    <option value="Company">Company</option>
                </select>
              </div>
            </div>
            {role == "Individual" && (
              <>
                  <div className='py-4 grid grid-cols-2 gap-4'>
                <div className='relative'>
                  <input value={Name} onChange={handleChangeInput("Name")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label> 
              </div>
              <div className='relative'>
                <input value={PAN_No} onChange={handleChangeInput("PAN_No")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">PAN No</label> 
              </div>
            </div>
            <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={Email} onChange={handleChangeInput("Email")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label> 
              </div>
              <div className='relative'>
                <textarea value={Address} onChange={handleChangeInput("Address")} rows="3" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Address</label> 
              </div>
            </div>
            <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={Contact_no} onChange={handleChangeInput("Contact_no")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contact No</label> 
              </div>
              <div className='relative'>
                <input value={password} onChange={handleChangeInput("password")} type="password" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label> 
              </div>
              </div>
              <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={confirmedPassword} onChange={handleChangeInput("confirmedPassword")} type="password" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label> 
              </div>
              </div>
              </>
            )}
            {role == "Company" && (
              <>
                <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={Company_Name} onChange={handleChangeInput("Company_Name")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Name</label> 
              </div>
              <div className='relative'>
                <input value={TAN_No} onChange={handleChangeInput("TAN_No")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">TAN No</label> 
              </div>
            </div>
            <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <textarea value={Company_address} onChange={handleChangeInput("Company_address")} rows="3" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Address</label> 
              </div>
              <div className='relative'>
                <input value={Company_email} onChange={handleChangeInput("Company_email")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Email</label> 
              </div>
            </div>
            <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={Company_contact_no} onChange={handleChangeInput("Company_contact_no")} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company Contact No</label> 
              </div>
              <div className='relative'>
                <input value={password} onChange={handleChangeInput("password")} type='password' className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label> 
              </div>
              </div>
              <div className='py-4 grid grid-cols-2 gap-4'>
              <div className='relative'>
                  <input value={confirmedPassword} onChange={handleChangeInput("confirmedPassword")} type='password' className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " /> 
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-purple-950 peer-focus:dark:text-purple-950 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 before:content-[' '] after:content-['*'] after:text-red-500 after:ml-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label> 
              </div>
              </div>
              </>
            )}
            <div className='grid grid-cols-1 justify-between w-full py-4'>
              <div className='mr-24'>
                <input onClick={handleClick} type="checkbox" className='mr-2' />
                <span className='text-md text-center font-semibold'>Read and accept all <Link href="" className='hover:text-blue-500'>terms and conditions</Link></span>
              </div>
                </div>
                {isAccepted && 
                    <button className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>Register</button>
                }
                {success && (
                  <span className="text-green-600 font-semibold">
                    {success}
                  </span>
                )}
                {error && (
                  <span className="text-red-600 font-semibold">
                    {error}
                  </span>
                )}
          </div>
          <div className='relative'>
            <img src="/image.jpg" alt='img' className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover'/>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default RegisterComponent