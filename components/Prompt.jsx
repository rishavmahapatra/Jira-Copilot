import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Prompt({prompt}) {
    const [display,setDisplay]= useState(false);
    console.log("pp", prompt);
    const handleClick = ()=>{
        setDisplay(!display);
    }
  return (
    <div className=' m-5'>
        <Button onClick={handleClick} className='relative top-0 block mx-auto right-0' >Show/Hide Prompt</Button>
      {display && (<p className=' m-3 p-3 rounded-xl border-2 shadow-lg bg-gradient-to-l from-[#a8ff78] to-[#78ffd6]'>{prompt}</p>)}
    </div>
  )
}