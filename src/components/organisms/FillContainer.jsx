import React from 'react'
import { Link } from "react-router-dom";
import Buttons from '../atoms/Buttons';

export default function () {
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-[25rem] gap-6 px-12 py-8 bg-white border-[2px] border-orange-200 drop-shadow-xl'>
            <div className='align-left font-normal text-orange-500'>
                Please Fill in
            </div>
            <div className='flex flex-col w-full'>
                <label>Name / Company Name</label>
                <input className='border-[1px] border-blue-200 pl-4 h-8' type="text"/>
            </div>
            <div className='flex flex-col w-full'>
                <label>Job Title</label>
                <input className='border-[1px] border-blue-200 pl-4 h-8' type="text"/>
            </div>
            <div className='flex flex-col w-full'>
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
            <div className='flex justify-center pt-4'>
                <Link to="/info">
                    <Buttons>Next</Buttons>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
