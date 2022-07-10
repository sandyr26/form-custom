import {useState} from 'react'
import SubmitCTA from '../atoms/SubmitCTA'
import Table from '../molecules/Table'
import data from '../../../data/data'
import NavBar from '../molecules/NavBar';
import Footer from '../molecules/Footer';
import Select from '../atoms/Select';

export default function TableContainer() {
    const [probability, setProbability] = useState(new Array(data.length).fill(0));
    const [impact, setImpact] = useState(new Array(data.length).fill(0));
    const [severity, setSeverity] = useState(new Array(data.length).fill(0));
  
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
    const handleChangeSeverity = (e, index) => {
      const updatedCheckState = severity.map((item, i) => 
          i === index ? e.target.value : item
      )
      setSeverity(updatedCheckState)
    }
    
  return (
    <div className='w-full flex flex-col items-center'>
        <NavBar />
        <Table handleChangeProbability={handleChangeProbability} handleChangeImpact={handleChangeImpact} handleChangeSeverity={handleChangeSeverity}/>
        <SubmitCTA data={data} probability={probability} impact={impact} severity={severity}/>
        {/* <Select /> */}
        <Footer />
    </div>
  )
}
