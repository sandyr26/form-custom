import React from 'react'
import InfoTemplate from '../templates/InfoTemplate'
import FillContainer from '../organisms/FillContainer'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function InfoPage(props) {

  const {type} = useParams()
  // const stateParamVal = useLocation().state.roleValue
  console.log(type)
  // console.log(stateParamVal)

  return (
    <div>        
      <InfoTemplate />
    </div>
  )
}
