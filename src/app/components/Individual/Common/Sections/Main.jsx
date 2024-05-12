import React from 'react'
import Header from './Header'

const Main = ({children}) => {
  return (
    <div className="bg-no-repeat w-2/5 bg-[url('https://images.unsplash.com/photo-1549778399-f94fd24d4697?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed grow h-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center gap-2 p-4">
      {/* hi */}
      <Header />
      {children}
    </div>
  )
}

export default Main