import React from 'react'

export default function Buttons(props) {
  return (
    <button onClick={props.onClick} className={`${props.state} text-center border-2 px-4 py-1 w-32 bg-orange-400 text-white hover:bg-orange-600`}>
        {props.children}
    </button>
  )
}
