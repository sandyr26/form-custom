import React from 'react'

export default function RowHeader() {
  return (
    <div className='sticky top-0 flex px-8 pt-8 bg-[#2ec7f2] border-b-2'>
        <div className='px-4 w-[50%] font-semibold'>Risk</div>
        <div className='flex w-[50%] flex-row gap-4'>
            <div className='flex flex-col items-center w-[50%]'>
                <div className='font-semibold pb-2'>Probability</div>
                <div className='flex w-full'>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>1</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>2</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>3</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full'>4</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full'>5</span>
                </div>
            </div>
            <div className='flex flex-col items-center w-[50%]'>
            <div className='font-semibold pb-2'>Impact</div>
                <div className='flex w-full'>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >1</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >2</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >3</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] w-full' >4</span>
                    <span className='border-l-[1px] text-center py-2 border-t-[1px] border-r-[1px] w-full' >5</span>
                </div>
            </div>
        </div>
    </div>
  )
}
