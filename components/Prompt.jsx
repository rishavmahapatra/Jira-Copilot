import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Prompt({prompt}) {
    const [display,setDisplay]= useState(false);
    const handleClick = ()=>{
        setDisplay(!display);
    }
  return (
    <div className=' m-5'>
        <Button onClick={handleClick} className='block mx-auto border border-green-700 right-0' >Show/Hide Prompt</Button>
      {display && (<p className='mx-auto m-3 p-3 w-full rounded-xl border-2 shadow-lg bg-gradient-to-l from-[#a8ff78] to-[#78ffd6]'>{prompt}</p>)}
    </div>
  )
}