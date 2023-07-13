import { IconButton, Tooltip } from '@mui/material'
import React, { useContext } from 'react'
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from 'axios';
import DataContext from '../Context/Context';

function Action({params,ChangeValueOfSuccess,ChangeValueOfError,HandleEdit}) {
    const {getMateriel} = useContext(DataContext)
    const {changeId} = useContext(DataContext)
    const HandleClickEdit = ()=>{
       changeId(params.id)
       HandleEdit()
    } 
  const HandleClickDelete = async()=>{
    const deleteQcm = await axios.delete(`http://localhost:8080/materiel/delete/${params.id}`)
    console.log(deleteQcm)
    if(deleteQcm.status === 200){
        getMateriel()
        ChangeValueOfSuccess()
    }else{
        ChangeValueOfError()
    }
  }
  return (
    <div>
        <Tooltip>
            <IconButton onClick={()=>console.log(params)}>
                <ContactsOutlinedIcon sx={{color:"#66ACFF"}}/>
            </IconButton>
        </Tooltip>
        <Tooltip>
            <IconButton onClick={HandleClickEdit}>
                <EditOutlinedIcon sx={{color:"#66ACFF"}}/>
            </IconButton>
        </Tooltip>
        <Tooltip>
            <IconButton onClick={HandleClickDelete}>
                <DeleteOutlineOutlinedIcon sx={{color:"#66ACFF"}}/>
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default Action