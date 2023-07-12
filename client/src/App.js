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
    <div className="flex flex-col space-y-10  relative">
        {
          showadd &&  (
            <AddMateriel/>
          )
        }
        <Navbar HandleClickAddnewMaterial={HandleClickAddnewMaterial}  />
        <Table/>
    </div>
  );
}

export default App;
