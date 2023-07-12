import React,{useContext, useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, AlertTitle } from '@mui/material';
import {motion} from 'framer-motion'
import Action from './Action';
import DataContext from '../Context/Context';
import UpdateMateriel from './UpdateMateriel';


export default function Table() {
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const {arrayOfMaterial} = useContext(DataContext)
  const [showEdit,setShowEdit] = useState(false)
  const HandleEdit = ()=>{setShowEdit(anc=>!anc)}
  const ChangeValueOfSuccess = () => {
    setSuccess(true)
  }
  const ChangeValueOfError = () =>{
    setError(true)
  }
  
  const columns = [
    { field: 'id', headerName: 'M Materiel', width: 180 },
    {
      field: 'Design',
      headerName: 'Design',
      width: 300,
      editable: true,
    },
    {
      field: 'Etat',
      headerName: 'Etat',
      width: 250,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'quantity',
      type: 'string',
      width: 210,
      editable: true,
    },{
      field: 'action',
      headerName: 'Action',
      type: 'actions',
      width:250,  
      renderCell:( params) =>(
        <Action  params={params} HandleEdit={HandleEdit}  ChangeValueOfError={ChangeValueOfError} ChangeValueOfSuccess={ChangeValueOfSuccess} />
      )
    }
  ];
  let rows = arrayOfMaterial.map(materiel=>{
    return  {
              id: materiel._id,
              Design: materiel.design,
              Etat: materiel.etat,
              quantity: materiel.quantity
            };
      
  })
  useEffect(()=>{
    
  },[])

  return (
    <>
    {
      showEdit && (
        <UpdateMateriel HandleEdit={HandleEdit}  />
      )
    }
    <div className='mt-20'>
        {
            error && (
                <motion.div
                  initial={
                  {
                   opacity: 0,
                   y:-100
                  }
                  }
                  animate={{
                      opacity:1,
                      y:0
                  }}
                  transition={
                      {
                        duration: 0.7
                      }
                }>
                <Alert severity='error'  onClose={()=>{setError(false)}}>
                    <AlertTitle>Error</AlertTitle>
                     Error when deleting materiel
                  </Alert>
              </motion.div>
            )
        }
        {
          success && (
            <motion.div
            initial={
              {
                opacity: 0,
                y:-100
              }
              }
              animate={{
                  opacity:1,
                  y:0
              }}
              transition={
                  {
                    duration: 0.7
                  }
              }
              className='mr-3'
              >
              <Alert severity='success' onClose={()=>{setSuccess(false)}}>
                  <AlertTitle>Success!</AlertTitle>
                  Materiel deleted successfully!
              </Alert>
            </motion.div>
          )
        }
    <Box sx={{ height: 450, width: '96%',margin: "30px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <div className="flex justify-between items-center mr-5">
      <button className="px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
         {/* <Link to="/admin/dashboard/student/create">Add Student</Link> */}
      </button>
      <button className="px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
         {/* <Link to="/admin/dashboard/student/byLevel">materiel List By Level</Link> */}
      </button>
    </div>
    </div>
    </>
  );
}
