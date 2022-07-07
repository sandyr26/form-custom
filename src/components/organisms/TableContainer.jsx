import React from 'react'
import Row from '../atoms/RowData'
import RowHeader from '../atoms/RowHeader'
import SubmitCTA from '../atoms/SubmitCTA'

export default function TableContainer() {
  return (
    <div>
        <RowHeader />
        <Row />
        <SubmitCTA />
    </div>
  )
}
