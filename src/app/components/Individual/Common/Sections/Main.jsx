'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useRouter } from 'next/navigation';
import { signout } from '../../../../../../actions/auth';
import { useIdleTimer } from 'react-idle-timer';

const Main = ({ children }) => {

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
    timeout: 1000 * 60 * 10 ,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500
  })

  // when component mounts, it adds an event listeners to the window
  // each time any of the event is triggered, i.e on mouse move, click, scroll, keypress etc, the timer to logout user after 10 secs of inactivity resets.
  // However, if none of the event is triggered within 10 secs, that is app is inactive, the app automatically logs out.
 

  return (
    <div className="bg-no-repeat w-2/5 bg-[url('https://images.unsplash.com/photo-1633169621790-71e519cfb42d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed grow h-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center gap-2 p-4">
      {/* hi */}
      <Header />
      {children}
    </div>
  )
}

export default Main