import React from 'react'
import ForgotPasswordComponent from '../components/ForgotPasswordComponent'
import TransitionProvider from '../components/TransitionProvider';

export const metadata = {
  title: "FINANCIA | FORGOT PASSWORD PAGE",
  description: "Generated by create next app",
};


const page = () => {
  return (
    <TransitionProvider>
        <ForgotPasswordComponent/>
    </TransitionProvider>
  )
}

export default page