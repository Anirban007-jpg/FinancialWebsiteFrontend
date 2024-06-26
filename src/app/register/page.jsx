import React from 'react'
import RegisterComponent from '../components/RegisterComponent'
import TransitionProvider from '../components/TransitionProvider';

export const metadata = {
  title: "FINANCIA | REGISTER PAGE",
  description: "Generated by create next app",
};


const page = () => {
  return (
    <TransitionProvider>
        <RegisterComponent/>
    </TransitionProvider>
  )
}

export default page