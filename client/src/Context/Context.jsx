import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function Context({children}) {
    const[arrayOfMaterial,setArrayOfMaterial] = useState([])
    const [idToChange,setIdToChange] = useState('')
    const changeId = (newId)=>{setIdToChange(newId)}
    const getMateriel = async()=>{
        const materiel = await axios.get('http://localhost:8080/materiel/get')
         if(materiel.status === 200){
            setArrayOfMaterial(materiel.data.materiel)
         }
      }
      useEffect(()=>{
        getMateriel()
      },[])
  return (
    <DataContext.Provider value={{arrayOfMaterial,setArrayOfMaterial,getMateriel,changeId,idToChange}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {Context}
