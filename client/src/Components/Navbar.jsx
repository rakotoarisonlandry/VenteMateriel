import React, { useState } from 'react'
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';

function Navbar({HandleClickAddnewMaterial}) {

  return (
<>
<div className='fixed h-[9vh] w-full   bg-[#120029]  opacity-100 flex justify-between items-center px-7'>
        <div className="flex">
          <h1 className='font-bold  text-[#fff] '>M.</h1>
          <span className='font-extralight  bg-clip-text bg-gradient-to-r from-[#2194ff] to-[#993eff] stroke-current text-transparent '>|a|t|e|r|i|a|l</span>
        </div>
        <div className="">
        </div>
        <div className="">
          <button onClick={HandleClickAddnewMaterial} className='text-sm border-[0px] opacity-100  text-white px-4 py-2 font-bold  bg-gradient-to-r from-[#2194ff] to-[#993eff]  rounded-full'>
             NEW
             <AutoAwesomeSharpIcon sx={{height:20}} className='ml-2'/>
          </button>
        </div>
    </div>                          
</>
  )
}

export default Navbar
