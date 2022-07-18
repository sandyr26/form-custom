import React from 'react'
import TableContainer from '../organisms/TableContainer'

export default function FormTemplate() {
  let date = new Date()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='bg-[#f4f7ff]'>
        <TableContainer date={date}/>
    </div>
  )
}
