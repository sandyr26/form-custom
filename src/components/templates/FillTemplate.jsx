import React from 'react'
import NavBar from '../molecules/NavBar';
import FillContainer from '../organisms/FillContainer';

export default function FillTemplate() {
  return (
    <div className='w-full h-full'>
      <div className='h-1/6'>
        <NavBar />
      </div>
      <div className='flex justify-center items-center h-5/6'>
        <FillContainer />
      </div>
    </div>
  )
}
