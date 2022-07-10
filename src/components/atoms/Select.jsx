import React from 'react'
import axios from 'axios';

export default function Select() {

  const [time, setTime] = React.useState()

  const timeStamp = () => {
    axios.get("https://asterloto.com/form-custom/getTimeStamp.php")
      .then(function (response) {
        setTime(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    console.log(time)
  React.useEffect(() => {
    timeStamp()
  },[])

  return (
    <select>
      {/* {time.map(item => <option>{item.time_stamp}</option>)} */}
    </select>
  )
}
