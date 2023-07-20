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

const ManageOrderRecord=()=> {

  let navigate=useNavigate();

      const[orders_record,setOrders_record]=useState([]);

      useEffect(()=>{
        fetchRecord();
        
      },[]);

      function fetchRecord(){
        fetch(`${Config.baseUrl}/record`)
        .then((res)=>res.json())
        .then((result)=>{
          
         
          setOrders_record(result);
         
        })
      }

      // const handleEdit=(id)=>{
      //   navigate(`/edit-orders/${id}`);
      // }
      const handleDetails=(id)=>{
        navigate(`/details-record/${id}`);
      }

      const handleDelete=(id)=>{
        const confirm=window.confirm("Are you sure?");   
        if((confirm)){

        fetch(`${Config.baseUrl}/record/${id}`, {
          method: 'DELETE',
         
        
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(orders_record => {
          //console.log(data);
          fetchRecord();

        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
  }

      

  return (
   <>
   
   <h3>Manage Record</h3>
   <Link to="/Create-record" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",marginBottom:"10px",backgroundColor:"#4B0082"}}>
      Create Record
    </Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell >Delivery Date</StyledTableCell>
            <StyledTableCell >Order Total</StyledTableCell>
            <StyledTableCell>Remark</StyledTableCell>
            
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders_record.map((record) => (
            <StyledTableRow key={record.id}>

              <StyledTableCell component="th" scope="row">
                {record.id}
              </StyledTableCell>
              <StyledTableCell >{record.customer_id}</StyledTableCell>
              <StyledTableCell >{record.delivery_date}</StyledTableCell>
              <StyledTableCell >{record.order_total}</StyledTableCell>
              <StyledTableCell >{record.remark}</StyledTableCell>
              
              <StyledTableCell >
            
            <IconButton onClick={()=>handleDelete(record.id)} style={{color:"red"}} aria-label="delete" size="large">
              <DeleteIcon />
              </IconButton>
            <IconButton  style={{color:"black"}} aria-label="edit" size="large">
              <EditIcon />
              </IconButton>
            <IconButton onClick={()=>handleDetails(record.id)} style={{color:"green"}} aria-label="view" size="large">
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

export default ManageOrderRecord;
