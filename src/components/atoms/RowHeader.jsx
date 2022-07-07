import React from 'react'

export default function RowHeader() {
  return (
    <div className='sticky top-0 flex px-8 pt-8 bg-white border-b-2'>
        <div className='px-4 w-[30%]'></div>
        <div className='flex flex-col items-center w-[15%] pr-4'>
            <div className='font-semibold'>Probability</div>
            <div className='flex w-full'>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>1</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>2</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>3</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>4</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full'>5</span>
            </div>
        </div>
        <div className='flex flex-col items-center w-[15%]  pl-4'>
        <div className='font-semibold'>Impact</div>
            <div className='flex w-full'>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >1</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >2</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >3</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >4</span>
                <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full' >5</span>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center w-[40%]'>
            <div className='font-semibold'>Do you agree that the risk may cause the following?</div>
            <div className='flex w-full'>
                <div className='w-[62.5%]'></div>
                <div className='flex w-[37.5%] pr-4'>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>1</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>2</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>3</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>4</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full'>5</span>
                </div>
            </div>
        </div>
    </div>
  )
}
