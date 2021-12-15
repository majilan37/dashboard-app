import React,{useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';

import {userRows } from '../../../dummyData'
import '../../../styles/pages/UserList.css'
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';

const UserList = () => {
    const [data, setData] = useState(userRows)
    const handleDelete = id => {
       let handler = data.filter(item => item.id !== id)
       setData(handler)
    }
    console.log(data);
    const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'Username',
      renderCell: (params) => (
          
          <div className='userListUser' >
              {console.log(params)}
              <img className='userListImg' src={params.row.avatar} alt="" />
              {params.row.username}
          </div>
      )
      ,
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 130,
    },
    {
      field: 'transition',
      headerName: 'Transition volume',
      width: 200,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
       
        renderCell: (params) => (
            <>
               <Link to={'/users/' + params.row.id} >
                  <button className="userListEdit">Edit</button>
               </Link>
                <DeleteOutline onClick={() => handleDelete(params.row.id)} className="userListDelete" />
            </>
        )
    },
];
    return (
        <div className='userList' >
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={6}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList
