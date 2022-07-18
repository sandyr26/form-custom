import React from 'react'

export default function RowHeader() {
  return (
    <div className='top-0 flex px-8 h-12 w-full bg-orange-100 border-b-2'>
        <div className='flex h-full lg:px-8 md:px-8 w-full m-auto'>
            <div className='flex items-center w-full font-semibold'>
                <div>Type of risk</div>
            </div>
        </div>
    </div>
  )
}
