import React from 'react'
import FormTemplate from '../templates/FormTemplate'
import { useLocation } from 'react-router-dom'

export default function () {
  const location = useLocation()
  const { role } = location.state
  const { jobTitle } = location.state
  const { companyName } = location.state

  return (
    <div>
        <FormTemplate role={role} jobTitle={jobTitle} companyName={companyName}/>
    </div>
  )
}
