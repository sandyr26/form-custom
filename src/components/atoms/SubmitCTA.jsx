import {useState, useEffect} from 'react'

export default function SubmitCTA(props) {
    
    const [csvContent, setcsvContent] = useState("");
    
    useEffect(() => {
        var updatedList = "data:text/csv;charset=utf-8,Question, Probability, Impact, Risk \r\n"
        props.data.map((items, i) =>
            updatedList += "" + items.question + "," + props.probability[i] + ", " + props.impact[i] + ", " + props.risk[i] + "\r\n"
        )
        setcsvContent(updatedList)
    },[props.probability, props.impact, props.risk])
    
    const exportFile = () => {
        window.open(encodeURI(csvContent));
    }

  return (
    <div>
        <button onClick={exportFile} className='border-2 px-4 py-2 bg-blue-400 text-white hover:bg-blue-700'>
            Submit
        </button>
    </div>
  )
}
