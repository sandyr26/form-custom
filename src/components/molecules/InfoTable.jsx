import React from 'react'

export default function InfoTable(props) {
  return (
    <div className='flex flex-col justify-center items-center py-4'>
        <div className='w-full border-[1px] drop-shadow-md border-black'>
            <div className='text-center font-bold text-xs py-1 underline bg-orange-400 text-white'>{props.title}</div>
            <div className='flex w-full '>
                <div className='w-1/3 text-sm border-b-[1px] border-t-[1px] border-black text-center'>{props.header1}</div>
                <div className='w-2/3 text-sm border-b-[1px] border-t-[1px] border-l-[1px] border-black text-center'>{props.header2}</div>
            </div>
            <div className='flex text-sm bg-custom1'>
                <div className='w-1/3 text-center border-b-[1px]  border-black'>1</div>
                <div className='w-2/3 text-center border-b-[1px] border-l-[1px] border-black'>{props.row1}</div>
            </div>
            <div className='flex text-sm bg-custom2'>
                <div className='w-1/3 text-center border-b-[1px] border-black'>2</div>
                <div className='w-2/3 text-center border-b-[1px] border-l-[1px] border-black'>{props.row2}</div>
            </div>
            <div className='flex text-sm bg-custom3'>
                <div className='w-1/3 text-center border-b-[1px] border-black'>3</div>
                <div className='w-2/3 text-center border-b-[1px] border-l-[1px] border-black'>{props.row3}</div>
            </div>
            <div className='flex text-sm bg-custom4'>
                <div className='w-1/3 text-center border-b-[1px] border-black'>4</div>
                <div className='w-2/3 text-center border-b-[1px] border-l-[1px] border-black'>{props.row4}</div>
            </div>
            <div className='flex text-sm bg-custom5'>
                <div className='w-1/3 text-center'>5</div>
                <div className='w-2/3 text-center border-l-[1px] border-black'>{props.row5}</div>
            </div>
        </div>
        <div className='text-xs font-semibold pt-1'>Table 3</div>
    </div>
  )
}
