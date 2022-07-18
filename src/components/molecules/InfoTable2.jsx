import React from 'react'

export default function InfoTable2(props) {
  return (
    <div className='flex flex-col justify-center items-center py-4'>
        <div className='w-full border-[1px] drop-shadow-md border-black'>
            <div className='text-center font-bold text-xs py-1 underline bg-orange-400 text-white'>{props.title}</div>
            <div className='flex w-full '>
                <div className='w-1/4 text-sm border-b-[1px] border-t-[1px] border-black text-center'>{props.header1}</div>
                <div className='w-1/4 text-sm border-b-[1px] border-t-[1px] border-l-[1px] border-black text-center'>{props.header2}</div>
                <div className='w-2/4 text-sm border-l-[1px] border-b-[1px] border-t-[1px] border-black text-center'>Description</div>
            </div>
            <div className='flex text-sm bg-custom1'>
                <div className='w-1/4 text-center border-b-[1px]  border-black flex justify-center items-center'>1</div>
                <div className='w-1/4 text-center border-b-[1px] border-l-[1px] border-black flex justify-center items-center'>{props.row1}</div>
                <div className='w-2/4 border-l-[1px] border-b-[1px] border-black px-2 bg-white'>{props.desc1}</div>
            </div>
            <div className='flex text-sm bg-custom2'>
                <div className='w-1/4 text-center border-b-[1px] border-black flex justify-center items-center'>2</div>
                <div className='w-1/4 text-center border-b-[1px] border-l-[1px] border-black flex justify-center items-center'>{props.row2}</div>
                <div className='w-2/4 border-l-[1px] border-b-[1px] border-black px-2 bg-white'>{props.desc2}</div>
            </div>
            <div className='flex text-sm bg-custom3'>
                <div className='w-1/4 text-center border-b-[1px] border-black flex justify-center items-center'>3</div>
                <div className='w-1/4 text-center border-b-[1px] border-l-[1px] border-black flex justify-center items-center'>{props.row3}</div>
                <div className='w-2/4 border-l-[1px] border-b-[1px] border-black px-2 bg-white'>{props.desc3}</div>
            </div>
            <div className='flex text-sm bg-custom4'>
                <div className='w-1/4 text-center border-b-[1px] border-black flex justify-center items-center'>4</div>
                <div className='w-1/4 text-center border-b-[1px] border-l-[1px] border-black flex justify-center items-center'>{props.row4}</div>
                <div className='w-2/4 border-l-[1px] border-b-[1px] border-black px-2 bg-white'>{props.desc4}</div>
            </div>
            <div className='flex text-sm bg-custom5'>
                <div className='w-1/4 text-center flex justify-center items-center'>5</div>
                <div className='w-1/4 text-center border-l-[1px] border-black flex justify-center items-center'>{props.row5}</div>
                <div className='w-2/4 border-l-[1px] border-black px-2 bg-white'>{props.desc5}</div>
            </div>
        </div>
        <div className='text-xs font-semibold pt-1'>Table 3</div>
    </div>
  )
}


