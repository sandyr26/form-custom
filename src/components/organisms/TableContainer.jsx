import {useState, useEffect} from 'react'
import SubmitCTA from '../atoms/SubmitCTA'
import Table from '../molecules/Table'
import NavBar from '../molecules/NavBar';
import Footer from '../molecules/Footer';
import Select from '../atoms/Select';

import dataDevelopment from "../../../data/dataDevelopment"
import dataDesign from "../../../data/dataDesign"
import dataManufacturing from "../../../data/dataManufacturing"
import dataInstallation from "../../../data/dataInstallation"
import dataOperation from "../../../data/dataOperation"
import dataDecommisioning from "../../../data/dataDecommisioning"

export default function TableContainer(props) {
    const [data, setData] = useState(dataDevelopment)
    const [dataName, setDataName] = useState("dataDevelopment")

    const [probability, setProbability] = useState(new Array(data.length).fill(0));
    const [impact, setImpact] = useState(new Array(data.length).fill(0));
    const [severity, setSeverity] = useState(new Array(data.length).fill(0));
  
    const [getRole, setGetRole] = useState("")

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

    const [csvContent, setcsvContent] = useState("data:text/csv;charset=utf-8,Phase, Risk Number, Risk, Probability, Impact, Consequence Number, Consequence Risk \r\n")
    const [uploadData, setUploadData] = useState("")
    
    const updateCSV = () => {
      var updatedList = csvContent
      var updatedListUpload = uploadData
      console.log(props.date)

      data.map((item, index) =>
        {
          updatedList += dataName + ", " + item.risk_id + ", " + item.risk + "," + probability[index] + ", " + impact[index] + ", " + item.severity_id + ", " + severity[index] + "\r\n"
          updatedListUpload += '("' + dataName + '", "' + item.risk_id + '", "' + item.risk + '", "' + probability[index] + '", "' + impact[index] + '", "' + item.severity_id + '", "' + severity[index] + '", "' + props.date + '", "' + 'company name' + '", "' + 'job title' + '", "' + 'role name' + '"),'
        }
        )
      setcsvContent(updatedList)
      setUploadData(updatedListUpload)
    }
  
    
  return (
    <div className='w-full flex flex-col items-center'>
        <NavBar />
        <button onClick={console.log(getRole)}>Click</button>
        <Table uploadData={uploadData} setGetRole={setGetRole} updateCSV={updateCSV} csvContent={csvContent} probability={probability} impact={impact} severity={severity} data={data} setData={setData} dataName={dataName} setDataName={setDataName} dataDesign={dataDesign} dataManufacturing={dataManufacturing} dataInstallation={dataInstallation} dataOperation={dataOperation} dataDecommisioning={dataDecommisioning} handleChangeProbability={handleChangeProbability} handleChangeImpact={handleChangeImpact} handleChangeSeverity={handleChangeSeverity} setProbability={setProbability} setImpact={setImpact} setSeverity={setSeverity}/>
        <Footer />
    </div>
  )
}