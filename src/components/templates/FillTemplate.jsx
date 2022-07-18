import React from 'react'
import NavBar from '../molecules/NavBar';
import FillContainer from '../organisms/FillContainer';

export default function FillTemplate() {
  return (
    <div className='w-full h-full'>
      <div className=''>
        <NavBar />
      </div>
      <div className='flex justify-center items-center pt-20'>
        <FillContainer />
      </div>
    </div>
  )
}
