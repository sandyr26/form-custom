import React from 'react'
import Row from '../atoms/RowData'
import RowHeader from '../atoms/RowHeader'

export default function Table(props) {

  return (
    <div className='flex flex-col w-[56rem] my-8 '>
        <RowHeader/>
        <Row  handleChangeProbability={props.handleChangeProbability} handleChangeImpact={props.handleChangeImpact} handleChangeSeverity={props.handleChangeSeverity}/>
    </div>
  )
}