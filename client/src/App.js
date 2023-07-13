import { useContext, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Table from './Components/Table'
import AddMateriel from './Components/AddMateriel';
import DataContext from './Context/Context';
import Stats from './Components/Stats';


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
    <div className="flex flex-col relative w-full h-screen">
        <Table/>
        <Navbar HandleClickAddnewMaterial={HandleClickAddnewMaterial}/>
        <Stats/>
    </div>
    </>
  );
}

export default App;
