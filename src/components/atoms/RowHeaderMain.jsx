import React from 'react'

export default function RowHeaderMain() {
  return (
    <div className='top-0 flex px-8 py-8 mb-8 bg-white border-b-2 drop-shadow-xl'>
        <div className='w-[100%] font-light'>
            <div>
                <div className='text-xl font-normal pb-2'>Solar Photovoltaic System Value Chain: 1 - Development Stage</div>
                <div>
                    This stage is also known as the Feasibility study stage and it includes acquiring land, permitting, financing, initial feasibility studies, and all activities completed prior to the project’s detailed design or procurement.
                </div> font-extralight
                <div className='flex gap-4 pt-8'>
                    <div className='flex flex-col items-center border-2 border-blue-500 w-1/6 h-24'>
                        <div className=' w-full h-8 text-black flex justify-center items-center font-semibold'>1</div>
                        <div className='h-18 pt-2 text-black text-center font-semibold'>Development</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>2</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Design</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>3</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Manufacturing/ Import</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>4</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Installation/ Commissioning</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>5</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Operation & Maintenance</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>6</div>
                        <div className='h-18 pt-2 text-white text-center'>Decomissioning</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
