import React, { useContext, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import axios from 'axios';
import DataContext from '../Context/Context';
import { useQuery } from '@tanstack/react-query';

function UpdateMateriel({HandleEdit}) {
    const [error,setError] = useState({design:false,state:false,quantity:false})
    const {getMateriel,idToChange,getSpecifique} = useContext(DataContext)
    const queryKey = ['info']
    const getInfo  = async()=>{
        const info  = await axios.get(`http://localhost:8080/materiel/info/${idToChange}`)
        console.log(info.data.materiel)
        return info.data.materiel
    }
    const {data,isLoading} = useQuery(queryKey,getInfo)
    const [information,setInformation] = useState({
        design:'',
        quantity: 0,
        state: ''
      })
    const HandleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInformation(values => ({...values,[name]:value}))
  }
  const HandleClickConfirm = async()=>{
    if(!information.design){
        setError(err=>({...err,design:true}))
    }
    if(!information.quantity){
    setError(err=>({...err,quantity:true}))
    }
    if(!information.state){
    setError(err=>({...err,state:true}))
    }
    else{
        console.log(information,idToChange)
        const newMaterial = await axios.put(`http://localhost:8080/materiel/update/${idToChange}`,information)
        if(newMaterial.status === 200){
            console.log("Material Updated successfully")
            getMateriel()
            getSpecifique()
            HandleEdit()

            // queryClient.invalidateQueries('materiel')
        }else{
            console.log(newMaterial)
        }
    }
  }
  useEffect(()=>{
    
    data && (
        setInformation({
            design:data.design,
            quantity:data.quantity,
            state:data.etat
        })
    )
  },[isLoading])
  return (
      <motion.div className="overlay" onClick={HandleEdit}>
        <div className="centrale flex m-0 p-0" onClick={(e)=> e.stopPropagation()}>
            <div className="w-[50%] flex flex-col  p-5 ">
                <div className="flex w-full justify-center items-center mt-10">
                    <h1 className='uppercase'>Update Material</h1>
                </div>
                <div className="flex flex-col space-y-5 mt-10">
                    <div className="flex flex-col space-y-1">
                    {
                        error.design && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                            <span className=' '>This is required !!</span>
                            <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                        )
                    }
                    <div className= {error.design ? "flex items-center border-[1px]  bg-[#17202a] h-[6vh]  rounded-full py-2 px-2 border-red-500"
                    :"flex items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] py-2 px-2 border-[#444]"}>
                        <DesignServicesIcon className='w-[10%] text-[#efefef]'/>
                        <input onFocus={()=>setError(err=>({...err,design:false}))} onChange={HandleChange} className='w-[90%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' name='design' value={information.design} type='text' placeholder='Design of material...'/>
                    </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                    {
                        error.state && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                            <span className=' '>This is required !!</span>
                            <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                        )
                    }
                    <select onChange={HandleChange} name='state' value={information.state} onFocus={()=>setError(err=>({...err,state:false}))}
                     className={
                      error.state ? 'outline-none bg-[#17202a] text-[#efefef] border-[1px] h-[6vh] rounded-full  px-2 border-red-500'
                      : 'outline-none bg-[#17202a] text-[#efefef] border-[1px] rounded-full px-2  h-[6vh] border-[#444]'
                     }>
                        <option value=''>State</option>
                            <option  value="Bon">Bon</option>
                            <option  value="Mauvais">Mauvais</option>
                            <option  value="Abime">Abime</option>
                    </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                    {
                        error.quantity && (
                        <div className="flex justify-between items-center text-red-500 text-sm">
                            <span className=' '>This is required !!</span>
                            <InfoOutlinedIcon sx={{height:'3vh'}}/>
                        </div>
                        )
                    }
                    <div className= {error.quantity ? "flex items-center border-[1px]  bg-[#17202a] h-[6vh]  rounded-full py-2 px-2 border-red-500"
                    :"flex items-center border-[1px]  bg-[#17202a]   rounded-full h-[6vh] py-2 px-2 border-[#444]"}>
                        <DesignServicesIcon className='w-[10%] text-[#efefef]'/>
                        <input onFocus={()=>setError(err=>({...err,quantity:false}))} onChange={HandleChange} value={information.quantity} className='w-[90%] placeholder:text-sm  ml-2 border-none outline-none bg-transparent text-[#efefef]' name='quantity' type='text' placeholder='Enter the Quantity...'/>
                    </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <button onClick={HandleClickConfirm} className='border-[1px] border-[#17202a] text-[#17202a] px-6 py-2 hover:bg-[#17202a]  hover:text-white rounded-lg'>
                            Confirme
                        </button>
                        <button  onClick={HandleEdit} className=' border-[1px] border-red-500 text-red-500 px-6 py-2 hover:bg-red-500  hover:text-white rounded-lg'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] bg-slate-500">
                {/* <img className='h-[20vh] w-[20vw]' src={Loti} alt=''/> */}

            </div>
        </div>
      </motion.div>
  )
}

export default UpdateMateriel
