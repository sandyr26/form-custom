import {useState, useEffect} from 'react'
import axios from 'axios';

export default function SubmitCTA(props) {


    // const upload = () => {
    //     console.log("hello")
    //     let date = new Date()
    //     props.data.map((item, index) => {
    //         axios.post("https://asterloto.com/form-custom/upload.php", {
    //             risk_id: item.risk_id,
    //             risk_name: item.risk,
    //             risk_probability: props.probability[index],
    //             risk_impact: props.impact[index],
    //             severity_question: item.severity,
    //             severity_value: props.severity[index],
    //             time_stamp: date.toLocaleTimeString()
    //         },
    //         {
    //             headers: 
    //                 {
    //                     "Content-type" : ""
    //                 }
    //         }            
    //         )
    //         .then( function(response) {
    //             console.log(response)
    //         })
    //         .catch( function(error){
    //             console.log(error)
    //         })
    //     })
    // }

    const upload = () => {
        console.log("hello")
        props.updateCSV()
        // let date = new Date()
        // props.data.map((item, index) => {
        //     $.ajax({
        //         url: "https://asterloto.com/form-custom/upload.php",
        //         type: "POST",
        //         data: {
        //             risk_id: item.risk_id,
        //             risk_name: item.risk,
        //             risk_probability: props.probability[index],
        //             risk_impact: props.impact[index],
        //             severity_question: item.severity,
        //             severity_value: props.severity[index],
        //             time_stamp: date.toLocaleTimeString()    
        //         }
        //     })
        // })
    }

    const exportFile = () => {
        upload()
        window.open(encodeURI(props.csvContent))
    }

  return (
    <div>
        <button onClick={exportFile} className={`${props.isVisible} border-[1px] px-16 py-4 bg-blue-300 hover:bg-blue-800 text-white`}>
            Submit
        </button>
    </div>
  )
}
