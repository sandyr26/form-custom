import React from 'react'
import Row from '../atoms/RowData'
import RowHeader from '../atoms/RowHeader'
import RowHeaderMain from '../atoms/RowHeaderMain'

export default function Table(props) {

  return (
    <div className='flex flex-col w-[56rem] my-8 '>
        <RowHeaderMain />
        <RowHeader/>
        <Row  handleChangeProbability={props.handleChangeProbability} handleChangeImpact={props.handleChangeImpact} handleChangeSeverity={props.handleChangeSeverity}/>
    </div>
  )
}