import React from 'react'

export default function RowHeader() {
  return (
    <div className='top-0 flex px-8 h-12 w-full bg-orange-100 border-b-2'>
        <div className='flex h-full px-8 w-[48rem] m-auto'>
            <div className='flex items-center w-[70%] font-semibold'>
                <div>Type of risk</div>
            </div>
            <div className='w-[30%] h-full'>
                <div className='flex h-full w-full justify-center items-center'>
                    <span className='text-center h-full flex justify-center items-center w-full bg-green-400'>1</span>
                    <span className='text-center h-full flex justify-center items-center w-full bg-green-600'>2</span>
                    <span className='text-center h-full flex justify-center items-center w-full bg-yellow-400'>3</span>
                    <span className='text-center h-full flex justify-center items-center w-full bg-red-400'>4</span>
                    <span className='text-center h-full flex justify-center items-center border-r-[1px] w-full bg-red-600'>5</span>
                </div>
            </div>
        </div>
    </div>
  )
}
