'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useRouter } from 'next/navigation';
import { signout } from '../../../../../../actions/auth';
const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

const Main = ({ children }) => {

  const router = useRouter();

  let timer;

  // this function sets the timer that logs out the user after 10 secs
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      // clears any pending timer.
      resetTimer();
      // Listener clean up. Removes the existing event listener from the window
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      // logs out user
      logoutAction();
    }, 180000); // 10000ms = 10secs. You can change the time.
  };

  // this resets the timer if it exists.
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  // when component mounts, it adds an event listeners to the window
  // each time any of the event is triggered, i.e on mouse move, click, scroll, keypress etc, the timer to logout user after 10 secs of inactivity resets.
  // However, if none of the event is triggered within 10 secs, that is app is inactive, the app automatically logs out.
  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  // logs out user by clearing out auth token in localStorage and redirecting url to /signin page.
  const logoutAction = () => {
    signout(() => router.push('/'))
  };

  return (
    <div className="bg-no-repeat w-2/5 bg-[url('https://images.unsplash.com/photo-1549778399-f94fd24d4697?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed grow h-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center gap-2 p-4">
      {/* hi */}
      <Header />
      {children}
    </div>
  )
}

export default Main