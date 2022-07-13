import React from 'react'
import NavBar from '../molecules/NavBar';
import FillContainer from '../organisms/FillContainer';

export default function FillTemplate() {
  return (
    <div className='w-full h-full'>
        <NavBar />
        <FillContainer />
    </div>
  )
}
