import {useState} from 'react'
import data from "../../../data/data"

export default function Row() {

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
  
  console.log("probability: " + probability)
  console.log("impact: " + impact)
  console.log("risk: " + risk)

  return (
    <div className=''>

        {
            data.map((item,index) => 
                <div className='flex flex-row pb-4'>
                    <div className='w-[20%] px-4 border-2'>
                        {item.question}
                    </div>
                    <div className='flex w-[20%] gap-4 px-4 border-2 border-r-2'>
                        <input onChange={(e) => handleChangeProbability(e, index)} name={`probability-${index}`} value="1" type="radio"/>
                        <input onChange={(e) => handleChangeProbability(e, index)} name={`probability-${index}`} value="2" type="radio"/>
                        <input onChange={(e) => handleChangeProbability(e, index)} name={`probability-${index}`} value="3" type="radio"/>
                        <input onChange={(e) => handleChangeProbability(e, index)} name={`probability-${index}`} value="4" type="radio"/>
                        <input onChange={(e) => handleChangeProbability(e, index)} name={`probability-${index}`} value="5" type="radio"/>
                    </div>
                    <div className='flex w-[20%] gap-4 px-4 border-2'>
                        <input onChange={(e) => handleChangeImpact(e, index)} name={`impact-${index}`} value="1" type="radio"/>
                        <input onChange={(e) => handleChangeImpact(e, index)} name={`impact-${index}`} value="2" type="radio"/>
                        <input onChange={(e) => handleChangeImpact(e, index)} name={`impact-${index}`} value="3" type="radio"/>
                        <input onChange={(e) => handleChangeImpact(e, index)} name={`impact-${index}`} value="4" type="radio"/>
                        <input onChange={(e) => handleChangeImpact(e, index)} name={`impact-${index}`} value="5" type="radio"/>
                    </div>
                    <div className='w-[20%] px-4 border-2'>
                        {item.risk}
                    </div>
                    <div className='w-[20%] flex gap-4 px-4 border-2'>
                        <input onChange={(e) => handleChangeRisk(e, index)} name={`risk-${index}`} value="1" type="radio"/>
                        <input onChange={(e) => handleChangeRisk(e, index)} name={`risk-${index}`} value="2" type="radio"/>
                        <input onChange={(e) => handleChangeRisk(e, index)} name={`risk-${index}`} value="3" type="radio"/>
                        <input onChange={(e) => handleChangeRisk(e, index)} name={`risk-${index}`} value="4" type="radio"/>
                        <input onChange={(e) => handleChangeRisk(e, index)} name={`risk-${index}`} value="5" type="radio"/>
                    </div>
                </div>
            )
        }
    </div>
  )
}
