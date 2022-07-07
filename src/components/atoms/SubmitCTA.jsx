import React from 'react'

export default function SubmitCTA() {
    
    let csvContent = "data:text/csv;charset=utf-8,Question, Probability, Impact, Risk \r\n";

    function download() {
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    }

  return (
    <div>
        <button onClick={() => download()} className='border-2 px-4 py-2 bg-blue-400 text-white hover:bg-blue-700'>
            Submit
        </button>
    </div>
  )
}
