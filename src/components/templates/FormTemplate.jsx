import React from 'react'
import TableContainer from '../organisms/TableContainer'

export default function FormTemplate() {
  let date = new Date()

  return (
    <div className='bg-[#f4f7ff]'>
        <TableContainer date={date}/>
    </div>
  )
}
