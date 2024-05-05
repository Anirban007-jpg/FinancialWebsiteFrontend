'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { emailContactForm } from '../../../actions/contact';



const ContactUsComponent = () => {
  const [values, setValues] = useState({
    usermessage: '',
    name: '',
    email: '',
    success: false,
    error: false,
    loading: false
    });

    // const router = useRouter();
    
// useEffect(() => {
//   if (isAuth() && isAuth().role === 'Company'){
//    router.push('/Company/Dashboard')
//   }else  if (isAuth() && isAuth().role === 'Admin'){
//       router.push('/Admin/Dashboard')
//   }
// }, [])


  const { usermessage, name, email, success, error,loading} = values;

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true});
    emailContactForm({ name, email, usermessage }).then(data => {
      if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
      } else {
          setValues({
              ...values,
              sent: true,
              name: '',
              email: '',
              usermessage: '',
              loading: false,
              success: data.success
          });
        }
      }
    );
  };

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value, error: false, success: false });
  };

  const text = "Ask us anything";
  
  
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
          <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24" onSubmit={clickSubmit}>
          <span className='font-bold'>Message</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            value={usermessage}
            onChange={handleChange("usermessage")}
          />
          <span className='font-bold'>My mail address is:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            value={email}
            onChange={handleChange("email")}
          />
          <span className='font-bold'>Regards</span>
          <input type="text" value={name} onChange={handleChange("name")} className='bg-transparent border-b-2 border-b-black outline-none' />
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
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
        </form>
      </div>
    </motion.div>
  )
}

export default ContactUsComponent