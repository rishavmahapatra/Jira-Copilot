import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Prompt({prompt}) {
    const [display,setDisplay]= useState(false);
    const handleClick = ()=>{
        setDisplay(!display);
    }
  return (
    <div className=' m-5'>
        <Button onClick={handleClick} className='block mx-auto mt-6 border border-green-700 right-0 x' >Show/Hide Prompt</Button>
      {display && (<p className='mx-auto m-2 mb-10 p-3 w-full rounded-xl border-2 shadow-lg bg-gradient-to-l from-lime-400 to-[#59c277] opacity-95 '>{prompt}</p>)}
    </div>
  )
}