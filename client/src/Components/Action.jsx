import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Action({params,ChangeValueOfSuccess,ChangeValueOfError}) {
    
    const HandleClickEdit = ()=>{
        // navigate(`/admin/dashboard/student/${params.id}/edit`)
  } 
  const HandleClickDelete = async()=>{
    const deleteQcm = await axios.post(`http://localhost:8080/Etudiant/delete.php/${params.id}`)
    console.log(deleteQcm)
    if(deleteQcm.status === 200){
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