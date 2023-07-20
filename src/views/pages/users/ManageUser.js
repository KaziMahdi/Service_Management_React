import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

import {useState,useEffect} from 'react';
import { Config } from '../../../model/config';
import { useNavigate,Link  } from "react-router-dom";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFC107",
    color: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const ManageUser=()=> {

  let navigate=useNavigate();

      const[error,setError]=useState(null);
      const[isLoaded,setIsLoaded]=useState(false);
      const[users,setUsers]=useState([]);

      useEffect(()=>{
        fetchUsers();
        
      },[]);

      function fetchUsers(){
        fetch(`${Config.baseUrl}/users`)
        .then((res)=>res.json())
        .then((result)=>{
          
          setIsLoaded(true);
          console.log(result);
          setUsers(result);
          
        }).catch((arr)=>{
          setError(arr);
        });
      }

      const handleEdit=(id)=>{
        navigate(`/edit-user/${id}`);
      }

      const handleDelete=(id)=>{
        const user=window.confirm("Are you sure");
        if((user)){

        
        fetch(`${Config.baseUrl}/users/${id}`, {
          method: 'DELETE',
         
        
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(users => {
          //console.log(data);
          fetchUsers();

        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
  }

      if(error) return <div>Error:{error.massege}</div>
      if(!isLoaded) return <div>Loaded</div>

  return (
   <>
   
   <h3>Manage User</h3>
   <Link to="/Create-user" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",marginBottom:"10px",backgroundColor:"#4B0082"}}>
      Create User
    </Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Password</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell >Role ID</StyledTableCell>
            <StyledTableCell >Photo</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>

              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              
              <StyledTableCell >{user.username}</StyledTableCell>
              <StyledTableCell >{user.password}</StyledTableCell>
              <StyledTableCell >{user.email}</StyledTableCell>
              <StyledTableCell >{user.role_id}</StyledTableCell>
              <StyledTableCell ><img src={`http://localhost:8080/img/${user.photo}`} width="100" /></StyledTableCell>
              <StyledTableCell >
            

            <IconButton onClick={()=>handleDelete(user.id)} style={{color:"red"}} aria-label="delete" size="large">
              <DeleteIcon />
              </IconButton>
            <IconButton onClick={()=>handleEdit(user.id)} style={{color:"black"}} aria-label="edit" size="large">
              <EditIcon />
              </IconButton>
            <IconButton style={{color:"green"}} aria-label="view" size="large">
              <VisibilityIcon />
              </IconButton>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </>
  );
};

export default ManageUser;