import React from 'react'
import NavBar from '../molecules/NavBar'
import Footer from '../molecules/Footer'

export default function ConfirmationTemplate() {
  return (
    <div className='flex flex-col justify-between w-full h-full'>        
        <NavBar />        
        <div className='flex justify-center items-center'>
            <div className='flex text-center justify-center items-center w-[28rem] h-[20rem] text-2xl bg-white border-[1px] border-orange-300 px-16 py-12 drop-shadow-xl'>
                Response sent
                Thank you
            </div>
        </div>
        <Footer />
    </div>
  )
}
