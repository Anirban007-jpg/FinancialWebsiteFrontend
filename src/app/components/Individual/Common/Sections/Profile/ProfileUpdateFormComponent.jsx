'use client'
import React, { useEffect, useState } from 'react'
import { isAuth } from '../../../../../../../actions/auth';
import Image from 'next/image';

const ProfileUpdateFormComponent = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    if (isAuth()){
      setData(isAuth());
    }
  },[])

  return (
    <div className='flex gap-[50px] mt-[20px]'>

    </div>
  )
}

export default ProfileUpdateFormComponent