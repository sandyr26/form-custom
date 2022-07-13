import React from 'react'

export default function RowHeader() {
  return (
    <div className='top-0 flex px-8 pt-4 bg-orange-100 border-b-2'>
        <div className='w-[70%] font-semibold'>
            <div className='h-8'></div>
            <div>Type of risk</div>
        </div>
        <div className='flex w-[30%] flex-row gap-4'>
            <div className='flex flex-col items-center w-[100%]'>
                <div className='h-8 font-semibold pb-2'></div>
                <div className='flex w-full'>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full bg-green-400'>1</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full bg-green-600'>2</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full bg-yellow-400'>3</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full bg-red-400'>4</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full bg-red-600'>5</span>
                </div>
            </div>
        </div>
    </div>
  )
}
