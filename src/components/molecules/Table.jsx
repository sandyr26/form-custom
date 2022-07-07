import React from 'react'
import Row from '../atoms/RowData'
import RowHeader from '../atoms/RowHeader'

export default function Table(props) {

  return (
    <div className='bg-white flex flex-col w-[98rem] my-8 drop-shadow-xl '>
        <RowHeader/>
        <Row  handleChangeProbability={props.handleChangeProbability} handleChangeImpact={props.handleChangeImpact} handleChangeRisk={props.handleChangeRisk}/>
    </div>
  )
}
