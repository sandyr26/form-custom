import {useState} from 'react'
import SubmitCTA from '../atoms/SubmitCTA'
import Table from '../molecules/Table'
import data from '../../../data/data'
import NavBar from '../molecules/NavBar';

export default function TableContainer() {
    const [probability, setProbability] = useState(new Array(data.length).fill(0));
    const [impact, setImpact] = useState(new Array(data.length).fill(0));
    const [risk, setRisk] = useState(new Array(data.length).fill(0));
  
    const handleChangeProbability = (e, index) => {
      const updatedCheckState = probability.map((item, i) => 
          i === index ? e.target.value : item
      )
      setProbability(updatedCheckState)
    }
    const handleChangeImpact = (e, index) => {
      const updatedCheckState = impact.map((item, i) => 
          i === index ? e.target.value : item
      )
      setImpact(updatedCheckState)
    }
    const handleChangeRisk = (e, index) => {
      const updatedCheckState = risk.map((item, i) => 
          i === index ? e.target.value : item
      )
      setRisk(updatedCheckState)
    }
    
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <NavBar />
        <Table handleChangeProbability={handleChangeProbability} handleChangeImpact={handleChangeImpact} handleChangeRisk={handleChangeRisk}/>
        <SubmitCTA data={data} probability={probability} impact={impact} risk={risk}/>
    </div>
  )
}
