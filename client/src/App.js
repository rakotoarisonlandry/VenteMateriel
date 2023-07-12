import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Table from './Components/Table'
import AddMateriel from './Components/AddMateriel';

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
    <div className="flex flex-col space-y-10">
        <Navbar HandleClickAddnewMaterial={HandleClickAddnewMaterial}  />
        <Table/>
    </div>
    </>
  );
}

export default App;
