import React, { useState } from 'react'

function Navbar({HandleClickAddnewMaterial}) {

  return (
<>
<div className='fixed h-[8vh] w-full bg-[#5090D3] flex justify-between items-center px-7'>
        <div className="">
            
        </div>
        <div className="">
        </div>
        <div className="">
          <button onClick={HandleClickAddnewMaterial} className='border-[1px] border-white text-white px-6 py-2 hover:bg-[#007FFF] hover:border-[#007FFF] rounded-lg'>
            Add new Materiel
          </button>
        </div>
    </div>                          
</>
  )
}

export default Navbar
