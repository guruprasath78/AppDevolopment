import React from 'react'

export default function Sync2({click,setClick}) {
  return (
    <div>
      <button onClick={()=>setClick(click-1)}>{click}</button>
    </div>
  )
}
