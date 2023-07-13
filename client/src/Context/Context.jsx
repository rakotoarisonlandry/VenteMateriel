import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function Context({children}) {
    const[arrayOfMaterial,setArrayOfMaterial] = useState([])
    const [idToChange,setIdToChange] = useState('')
    const [stat,setStat] = useState()
    const changeId = (newId)=>{setIdToChange(newId)}
    const getSpecifique = async()=>{
      const spec = await axios.get('http://localhost:8080/materiel/getSpecifique')
      if(spec.status === 200){
          setStat(spec.data.materiel)
      }
    }
    const getMateriel = async()=>{
        const materiel = await axios.get('http://localhost:8080/materiel/get')
         if(materiel.status === 200){
            setArrayOfMaterial(materiel.data.materiel)
         }
      }
      useEffect(()=>{
        getMateriel()
        getSpecifique()
      },[])
  return (
    <DataContext.Provider value={{arrayOfMaterial,setArrayOfMaterial,getMateriel,changeId,getSpecifique,idToChange,stat}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {Context}
