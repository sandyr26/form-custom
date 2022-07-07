import React from 'react'

export default function Info() {
  return (
    <div className='w-[35rem] flex flex-col bg-white p-8 gap-8'>
        <div className='flex flex-col justify-center items-center py-6'>
            <div>Logo</div>
            <div>Form Name</div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col w-[50%]'>
                    <label>First Name</label>
                    <input className='bg-blue-200' type="text"/>
                </div>
                <div className='flex flex-col w-[50%]'>
                    <label>First Name</label>
                    <input className='bg-blue-200' type="text"/>
                </div>
            </div>
            <div className='flex flex-col'>
                <label>Email Address</label>
                <input className='bg-blue-200' type="text"/>
            </div>
            <div className='flex flex-col'>
                <label>Company Name</label>
                <input className='bg-blue-200' type="text"/>
            </div>
        </div>
        <button className='border-2 px-4 py-1 bg-blue-400 text-white hover:bg-blue-700'>Next</button>
    </div>
  )
}
