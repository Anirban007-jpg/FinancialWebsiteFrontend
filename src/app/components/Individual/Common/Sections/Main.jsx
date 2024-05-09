import React from 'react'
import Header from './Header'

const Main = ({children}) => {
  return (
    <section className='w-4/5 grow bg-white h-screen relative overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
      {/* hi */}
      <Header />
      {children}
    </section>
  )
}

export default Main