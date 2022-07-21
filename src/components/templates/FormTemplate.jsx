import React from 'react'
import TableContainer from '../organisms/TableContainer'

export default function FormTemplate(props) {
  let date = new Date()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  return (
    <div className='bg-[#f4f7ff]'>
        <TableContainer date={date} role={props.role} jobTitle={props.jobTitle} companyName={props.companyName}/>
    </div>
  )
}
