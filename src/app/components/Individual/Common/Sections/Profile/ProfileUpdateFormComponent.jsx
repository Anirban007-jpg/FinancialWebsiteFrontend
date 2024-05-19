'use client'
import React, { useEffect, useState } from 'react'
import { getCookie, getProfile, isAuth, signout, update, updateUser } from '../../../../../../../actions/auth';
import Image from 'next/image';
import FormData from 'form-data';
import { useRouter } from 'next/navigation';
import { useIdleTimer } from 'react-idle-timer';

const ProfileUpdateFormComponent = () => {


  const router = useRouter();

  const handleOnIdle = event => {
    // console.log('user is idle', event)
    // console.log('last active', getLastActiveTime())
    signout(() => router.push('/'))
  }

  const handleOnActive = event => {
    // console.log('user is active', event)
    // console.log('time remaining', getRemainingTime())
  }

  const handleOnAction = event => {
    // console.log('user did something', event)
  }

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 10,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500
  })

  const token = getCookie('token');

  const [values, setValues] = useState({
    Name: '',
    PAN_No: '',
    _id: '',
    Email: '',
    Address: '',
    Contact_no: '',
    loading: false,
    error: false,
    success: false,
    photo: '',
    Username: ''
  });

  const init = () => {
    getProfile(token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          _id: data._id,
          Name: data.Name,
          PAN_No: data.PAN_No,
          Email: data.Email,
          Address: data.Address,
          Contact_no: data.Contact_no,
          Username: data.Username,
          individual: data
        });
      }
    });
  };

  useEffect(() => {

    init();
  }, [])



  const {
    Name,
    PAN_No,
    Email,
    Address,
    Contact_no,
    Username,
    loading,
    error,
    _id,
    success,
    photo } = values;


  const [userData, setUserData] = useState(new FormData())

  const handleChange = name => e => {
    // console.log(e.target.value);
    let value = name === 'photo' ? e.target.files[0] : e.target.value;
      userData.set(name, value);
    setValues({ ...values, [name]: value, error: false, success: false });
    setUserData(userData);

  };

  // console.log(userData)
  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    update(token, userData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false, loading: false });
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            Name: data.Name,
            PAN_No: data.PAN_No,
            Email: data.Email,
            Address: data.Address,
            Contact_no: data.Contact_no,
            Username: data.Username,
            success: true,
            loading: false
          });
       
        }
        
      );
      signout(() => { router.push('/') })

      }
    });
  };

  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="flex-1 bg-slate-400 p-[20px] rounded-[10px] font-bold text-white max-h-max h-[550px] w-[50%]">
        <div className="w-[100%] h-[500px] relative overflow-hidden mb-[20px] rounded-[10px]">
          <img src={`${process.env.NEXT_PUBLIC_DOMAIN}/photo/${_id}` || "/download.png"} fill className='w-[425px] h-[545px]' style={{ maxHeight: '100%', maxWidth: '100%' }} alt="/download.png" />
        </div>
      </div>
      <div className="flex-5 w-[50%] bg-slate-400 p-[20px] rounded-[10px]">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-grow gap-8 mb-5">
            <label className="font-bold">
              Profile Photo{" "}{" "}{" "}{" "}
            </label>
            <input onChange={handleChange('photo')} type="file" accept="image/*" />
          </div>

          <label>Name</label>
          <input type="text" className="p-[20px] w-full rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} onChange={handleChange('Name')} name="username" value={Name} />
          <label>PAN_No</label>
          <input type="text" className="p-[20px] w-full rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} onChange={handleChange('PAN_No')} name="username" value={PAN_No} />
          <label>Email</label>
          <input type="email" className="p-[20px] rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} onChange={handleChange('Email')} name="email" value={Email} />
          <label>Phone</label>
          <input type="text" className="p-[20px] rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} onChange={handleChange('Contact_no')} name="phone" value={Contact_no} />
          <label>Username</label>
          <input type="text" className="p-[20px] rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} onChange={handleChange('Username')} name="phone" value={Username} />
          <label>Address</label>
          <textarea type="text" className="p-[20px] rounded-[5px] bg-[#151c2c] text-white" style={{ margin: "10px 0px", border: "2px solid #2e374a" }} name="address" onChange={handleChange('Address')} value={Address} rows="5" />
          <div className='flex flex-row  w-full rounded-full items-center justify-center'>
            <button className='submitbutton'>
              <span className='buttontext'>Update</span>
            </button>
          </div>
          {success && (
            <div className='border-s border-[2px] bg-green-500 flex flex-row items-center justify-center rounded-full'>
              <span className="text-white font-bold text-center mt-0">
                Profile Updated!!
              </span>
            </div>
          )}
          {error && (
            <div className='border-s border-[2px] bg-red-500-500 flex flex-row items-center justify-center rounded-full'>
              <span className="text-white font-bold text-center mt-0">
                Something went wrong...
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ProfileUpdateFormComponent