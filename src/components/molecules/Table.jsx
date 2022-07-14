import React from 'react'
import RowData from '../atoms/RowData'
import RowHeader from '../atoms/RowHeader'
import RowHeaderMain from '../atoms/RowHeaderMain'



export default function Table(props) {

  const [defaultChecked, setDefaultChecked] = React.useState(false)

  const reset = () => {
    console.log("after: " + props.data.length)
    props.setProbability(new Array(50).fill(0))
    props.setImpact(new Array(50).fill(0))
    props.setSeverity(new Array(50).fill(0))
    console.log("setting")
    setDefaultChecked(false)
    window.scrollTo(0, 0)
  }

  const upload = () => {
  const slicing = props.uploadData.slice(0,-1)
    $.ajax({
        url: "https://asterloto.com/form-custom/upload.php",
        type: "POST",
        data: {
            data: slicing,  
        }
    })
}

const exportFile = () => {
    upload()
    window.open(encodeURI(props.csvContent))
}
  const handleClick = () => {
    props.dataName === "dataDevelopment" ?
        ( props.updateCSV(), props.setData(props.dataDesign), props.setDataName("dataDesign"), reset()) : 
          props.dataName === "dataDesign" ?
            (props.updateCSV(), props.setData(props.dataManufacturing), props.setDataName("dataManufacturing"),reset()) :
              props.dataName === "dataManufacturing" ?
                (props.updateCSV(), props.setData(props.dataInstallation), props.setDataName("dataInstallation"),reset()) :
                  props.dataName === "dataInstallation" ?
                    (props.updateCSV(), props.setData(props.dataOperation), props.setDataName("dataOperation"),reset()) :
                      props.dataName === "dataOperation" ?
                        (props.updateCSV(), props.setData(props.dataDecommisioning), props.setDataName("dataDecommisioning"), reset()) :
                          props.dataName === "dataDecommisioning" &&
                            (props.updateCSV(), exportFile())
  }

  return (
    <div className='flex flex-col w-[56rem] my-8 '>
      <div className='sticky top-0 z-20 bg-white'>
        <RowHeaderMain dataName={props.dataName}/>
        <RowHeader/>
      </div>
        <RowData setGetRole={props.setGetRole} probabilityValue={props.probabilityValue} setDefaultChecked={setDefaultChecked} defaultChecked={defaultChecked} updateCSV={props.updateCSV} csvContent={props.csvContent}  data={props.data} probability={props.probability} impact={props.impact} severity={props.severity} setData={props.setData} dataName={props.dataName} setDataName={props.setDataName} handleClick={handleClick} handleChangeProbability={props.handleChangeProbability} handleChangeImpact={props.handleChangeImpact} handleChangeSeverity={props.handleChangeSeverity}/>
    </div>
  )
}