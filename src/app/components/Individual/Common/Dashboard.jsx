import React from 'react'
import Sidebar from './Sections/Sidebar'
import Main from './Sections/Main'



const Dashboard = () => {
  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
        <div id="main-section" className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen'>
          <div id="left" className='col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4'>
                <div className=''>
                  
                </div>
              </div>  
          </div> 
        </div>
      </Main>
    </div>
  )
}

export default Dashboard