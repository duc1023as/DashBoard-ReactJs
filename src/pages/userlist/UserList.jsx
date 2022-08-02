import React, { useState } from 'react'
import "./userlist.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [userData,setUserData] = useState(userRows);
  const HandleDelete = (id) => {
    setUserData(userData.filter((item)=>item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'UserName', width: 130,
      renderCell:(params) => {
        return(
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt="avatar" />
            {params.row.userName}
          </div>
        )
      }  
    },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 90,
    },
    {
      field:'action',
      headerName:'Action',
      width:120,
      renderCell : (params) =>{
        return(
          <>
            <Link to={"/users/" +params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete' onClick={()=>HandleDelete(params.row.id)}></DeleteOutlineIcon>
          </>
        )
      }
    },
  ];
  

  return (
    <div className='userList'>
        <DataGrid
        rows={userData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
