import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Table from './Components/Table'
import AddMateriel from './Components/AddMateriel';
import { ClassNames } from '@emotion/react';


function App() {
  const [showadd,setShowAdd] = useState()
  const HandleClickAddnewMaterial = ()=>{
    setShowAdd(ancien=>!ancien)
  }
  return (
    <>
    {
      showadd &&  (
        <AddMateriel HandleClickAddnewMaterial={HandleClickAddnewMaterial}/>
      )
    }
    <div className="flex flex-col space-y-14 h-screen ">
        <Navbar HandleClickAddnewMaterial={HandleClickAddnewMaterial}  />
        <Table/>
    </div>
    </>
  );
}

export default App;
