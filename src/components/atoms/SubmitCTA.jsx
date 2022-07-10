import {useState, useEffect} from 'react'
import axios from 'axios';

export default function SubmitCTA(props) {
    const [csvContent, setcsvContent] = useState("")

    useEffect(() => {
        var updatedList = "data:text/csv;charset=utf-8,Risk, Probability, Impact, Risk \r\n"
        props.data.map((item, index) =>
            updatedList += "" + item.risk + "," + props.probability[index] + ", " + props.impact[index] + ", " + props.severity[index] + "\r\n"
        )
        setcsvContent(updatedList)
    },[props.probability, props.impact, props.severity])

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
        let date = new Date()
        props.data.map((item, index) => {
            $.ajax({
                url: "https://asterloto.com/form-custom/upload.php",
                type: "POST",
                data: {
                    risk_id: item.risk_id,
                    risk_name: item.risk,
                    risk_probability: props.probability[index],
                    risk_impact: props.impact[index],
                    severity_question: item.severity,
                    severity_value: props.severity[index],
                    time_stamp: date.toLocaleTimeString()    
                }
            })
        })
    }

    const exportFile = () => {
        upload()
        window.open(encodeURI(csvContent))
    }

  return (
    <div>
        <button onClick={exportFile} className='border-2 px-4 py-2 bg-blue-400 text-white hover:bg-blue-700'>
            Submit
        </button>
    </div>
  )
}
