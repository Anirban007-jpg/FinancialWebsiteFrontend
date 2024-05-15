import DisplayLedgersComponent from '@/app/components/Individual/Legder/DisplayLedgersComponent'
import React from 'react'
import { displayLedger } from '../../../../../actions/ledger'
import { cookies } from 'next/headers'
import { getCookie } from '../../../../../actions/auth'



const page = async () => {
    const ledger = await displayLedger();
  
    return (
    <>
        <DisplayLedgersComponent ledger={ledger}/>
    </>
  )
}




export default page