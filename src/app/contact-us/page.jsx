import React from 'react'
import ContactUsComponent from '../components/ContactUsComponent'
import TransitionProvider from '../components/TransitionProvider'

const page = () => {
  return (
    <TransitionProvider>
        <ContactUsComponent/>
    </TransitionProvider>
  )
}

export default page