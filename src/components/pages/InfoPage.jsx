import React from 'react'
import InfoTemplate from '../templates/InfoTemplate'
import { useLocation } from 'react-router-dom'

export default function InfoPage(props) {
  const location = useLocation()
  const { role } = location.state
  const { jobTitle } = location.state
  const { companyName } = location.state
  
  return (
    <div>       
      <InfoTemplate role={role} jobTitle={jobTitle} companyName={companyName} />
    </div>
  )
}
