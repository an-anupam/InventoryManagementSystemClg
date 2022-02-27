// import React from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
  
   const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  } 

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Username', headerName: 'User', width: 270, renderCell: (okay) =>{
      return(
        <div className="userListUser">
            <img className="userListImg" src={okay.row.avatar} alt=""/>
            {okay.row.Username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'idcard',
      headerName: 'Id Card',
      type: 'text',
      width: 190,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 120,
     
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (okay) => {
        return (
         <>
         <Link to={"/user/"+okay.row.id}>
            <button className="userListEdit">Edit</button>
         </Link>
          
          <DeleteOutline className="userListDelete" onClick={() => {handleDelete(okay.row.id)}}/>
         </> 
        );
      },
    },
  ];
  
  
  
  
  return (
    <div className="userList">
    <DataGrid
    rows={data} disableSelectionOnClick columns={columns}
    pageSize={8}
    rowsPerPageOptions={[5]}
    checkboxSelection
  />
    </div>
  )
}
