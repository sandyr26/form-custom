import React from 'react'
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className='w-[35rem] m-auto flex flex-col bg-white gap-8'>
        <div className='flex flex-col justify-center items-center bg-blue-300 h-16 text-white'>
            <div className='font-semibold'>Risk Assesment Survey</div>
        </div>
        <div className='flex flex-col gap-4 px-8'>
            <div className='flex flex-col w-[100%]'>
                <label>Name / Company Name</label>
                <input className='border-[1px] border-blue-200 pl-4 h-8' type="text"/>
            </div>
            <div className='flex flex-col w-[100%]'>
                <label>Job Title</label>
                <input className='border-[1px] border-blue-200 pl-4 h-8' type="text"/>
            </div>
            <div className='flex flex-col'>
                <label>Identify Role</label>
                <select className='border-[1px] border-blue-200 pl-4 h-8'>
                    <option>--- Select ---</option>
                    <option>Financial services</option>
                    <option>Regulatory</option>
                    <option>Project Management</option>
                    <option>Project Management</option>
                    <option>Technical advisor</option>
                    <option>Procurement</option>
                </select>
            </div>
            {/* <div className='flex flex-col'>
                <label>Type of Business Model</label>
                <select className='border-[1px] border-blue-200 pl-4 h-8'>
                    <option>--- Select ---</option>
                    <option>Host-owned</option>
                    <option>Third-party-owned</option>
                    <option>Community-shared</option>
                </select>
            </div> */}
            <div className='flex justify-center pb-8 pt-4'>
                <Link to="/form">
                    <button className='text-center border-2 px-4 py-1 w-32 bg-blue-500 text-white hover:bg-blue-800'>Next</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
