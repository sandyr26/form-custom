import React from 'react'

export default function RowHeader() {
  return (
    <div className='flex border-2'>
        <div className='px-4 border-2 w-[20%]'></div>
        <div className='px-4 border-2 w-[20%]'>
            <div>Probability</div>
            <div className='flex gap-5'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
        <div className='px-4 border-2 w-[20%]'>
        <div>Impact</div>
            <div className='flex gap-5'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
        <div className='border-2 w-[40%]'>
            <div>Do you agree that the risk may cause the following?</div>
            <div className='flex border-2'>
                <div className='border-2 w-[50%]'></div>
                <div className='border-2 flex w-[50%] gap-6'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
            </div>
        </div>
    </div>
  )
}
