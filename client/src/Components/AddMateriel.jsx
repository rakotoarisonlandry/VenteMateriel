import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import axios from "axios";
import DataContext from "../Context/Context";
// import { QueryClient, useQueryClient } from '@tanstack/react-query';
import Loti from '../assets/illustration.jpg'
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesome';

function AddMateriel({ HandleClickAddnewMaterial }) {
  const [error, setError] = useState({
    design: false,
    state: false,
    quantity: false,
  });
  // const queryClient = useQueryClient()
  const { getMateriel, getSpecifique } = useContext(DataContext);
  const [information, setInformation] = useState({
    design: "",
    quantity: 0,
    state: "",
  });
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInformation((values) => ({ ...values, [name]: value }));
  };
  const HandleClickConfirm = async () => {
    if (!information.design) {
      setError((err) => ({ ...err, design: true }));
    }
    if (!information.quantity) {
      setError((err) => ({ ...err, quantity: true }));
    }
    if (!information.state) {
      setError((err) => ({ ...err, state: true }));
    } else {
      const newMaterial = await axios.post(
        "http://localhost:8080/materiel/add",
        information
      );
      if (newMaterial.status === 200) {
        console.log("Material added successfully");
        getMateriel();
        getSpecifique();
        HandleClickAddnewMaterial();
        // queryClient.invalidateQueries('materiel')
      } else {
        console.log(newMaterial);
      }
    }
  };
  return (
    <motion.div className="overlay" onClick={HandleClickAddnewMaterial}>
      <div
        className="centrale flex m-0 p-0"
        onClick={(e) => e.stopPropagation()}
      >
       <div className="w-[50%] bg-white">
          <img className='h-[50vh] w-[50vw]' src={Loti} alt='' />
        </div>
        <div className="w-[50%] flex flex-col  p-5 ">
        
          <div className="flex w-full justify-left items-center mt-10">
          <AutoAwesomeSharpIcon sx={{height:20 }} className='mx-2 '/>
            <h1 className="uppercase bg-clip-text bg-gradient-to-r from-[#2194ff] to-[#993eff] stroke-current">Add new Material</h1>
          </div>
          <div className="flex flex-col space-y-5 mt-10">
            <div className="flex flex-col space-y-1">
              {error.design && (
                <div className="flex justify-between items-center text-red-500 text-sm">
                  <span className=" ">This is required !!</span>
                  <InfoOutlinedIcon sx={{ height: "3vh" }} />
                </div>
              )}
              <p className="text-[#120029] text-[13px]"> Enter State:</p>
              <div
                className={
                  error.design
                    ? "flex items-center border-[1px]  bg-[#eeeeee] h-[6vh]  rounded-full py-2 px-2 border-red-500"
                    : "flex items-center border-[1px]  bg-[#fff]  rounded-full  h-[6vh] py-4 px-2 border-[#fff]"
                }
              >
                <DesignServicesIcon className="w-[7%]   mr-6" />
                <input
                  onFocus={() => setError((err) => ({ ...err, design: false }))}
                  onChange={HandleChange}
                  className="w-[90%] placeholder:text-xs  ml-2 border-none outline-none bg-transparent text-[#120029] text-xs"
                  name="design"
                  type="text"
                  placeholder="Design of material..."
                />
              </div>

              <p className="text-[#120029] text-sm"> Enter State:</p>
            </div>
            <div className="flex flex-col space-y-1">
              {error.state && (
                <div className="flex justify-between items-center text-red-500 text-sm">
                  <span className=" ">This is required !!</span>
                  <InfoOutlinedIcon sx={{ height: "3vh" }} />
                </div>
              )}
              <select
                onChange={HandleChange}
                name="state"
                onFocus={() => setError((err) => ({ ...err, state: false }))}
                className={
                  error.state
                    ? "outline-none bg-[#eeeeee] text-[#efefef] border-[0px] h-[6vh]   px-2 border-red-500"
                    : "outline-none bg-[#fff] text-xs text-slate-700 text-[#120029]  border-[1px] rounded-full px-2  h-[6vh] border-[#444]"
                }
              >
                <option value="">State</option>
                <option value="Bon">Bon</option>
                <option value="Mauvais">Mauvais</option>
                <option value="Abime">Abime</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              {error.quantity && (
                <div className="flex justify-between items-center text-red-500 text-sm">
                  <span className=" ">This is required !!</span>
                  <InfoOutlinedIcon sx={{ height: "3vh" }} />
                </div>
              )}
              <p className="text-[#120029] text-sm"> Enter State:</p>
              <div
                className={
                  error.quantity
                    ? "flex items-center border-[1px]  bg-[#eeeeee] h-[6vh] rounded-md  py-2 px-2 border-red-500"
                    : "flex items-center border-[1px]  bg-[#fff]  rounded-full  h-[6vh] py-2 px-2 "
                }
              >
                <DesignServicesIcon className="w-[10%] text-[#120029] mr-6" />
                <input
                  onFocus={() =>
                    setError((err) => ({ ...err, quantity: false }))
                  }
                  onChange={HandleChange}
                  className="w-[90%] placeholder:text-xs ml-2 border-none outline-none bg-transparent text-[#120029] text-xs"
                  name="quantity"
                  type="text"
                  placeholder="Enter the State..."
                />
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <button
                onClick={HandleClickConfirm}
                className="border-[1px] border-[#17202a] text-[#17202a] px-6 py-2 hover:bg-[#17202a]  hover:text-white rounded-lg"
              >
                Confirmer
              </button>
              <button
                onClick={HandleClickAddnewMaterial}
                className=" border-[1px] border-red-500 text-red-500 px-6 py-2 hover:bg-red-500  hover:text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </motion.div>
  );
}

export default AddMateriel;
