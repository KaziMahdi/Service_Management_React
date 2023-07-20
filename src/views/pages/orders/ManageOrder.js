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
import Tooltip from '@mui/material/Tooltip';

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



const ManageOrder=()=> {

  let navigate=useNavigate();

      const[error,setError]=useState(null);
      const[isLoaded,setIsLoaded]=useState(false);
      const[orders,setOrders]=useState([]);

      useEffect(()=>{
        fetchOrders();
        
      },[]);

      function fetchOrders(){
        fetch(`${Config.baseUrl}/serviceorders`)
        .then((res)=>res.json())
        .then((result)=>{
          
          setIsLoaded(true);
          console.log(result);
          setOrders(result);
          console.log(orders);
        }).catch((arr)=>{
          setError(arr);
        });
      }

      // const handleEdit=(id)=>{
      //   navigate(`/edit-orders/${id}`);
      // }
      const handleDetails=(id)=>{
        navigate(`/order-details/${id}`);
      }

      const handleCreateOrder=(id)=>{
        navigate(`/Create-request/${id}`);
      }
      
      const handleDelete=(id)=>{
        const confirm=window.confirm("Are you sure?");   
        if((confirm)){

        fetch(`${Config.baseUrl}/serviceorders/${id}`, {
          method: 'DELETE',
         
        
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(orders => {
          //console.log(data);
          fetchOrders();

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
   
   <h3>Manage Orders</h3>
   <Link to="/Create-orders" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",marginBottom:"10px",backgroundColor:"#4B0082"}}>
      Create Orders
    </Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell >Order Date</StyledTableCell>
            <StyledTableCell>Remark</StyledTableCell>
            
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order.id}>

              <StyledTableCell component="th" scope="row">
                {order.id}
              </StyledTableCell>
              <StyledTableCell >{order.customer_id}</StyledTableCell>
              <StyledTableCell >{order.order_date}</StyledTableCell>
              <StyledTableCell >{order.remark}</StyledTableCell>
              
              <StyledTableCell >
            
            <IconButton onClick={()=>handleDelete(order.id)} style={{color:"red"}} aria-label="delete" size="large">
              <DeleteIcon />
              </IconButton>
            <IconButton  style={{color:"black"}} aria-label="edit" size="large">
              <EditIcon />
              </IconButton>
            <IconButton onClick={()=>handleDetails(order.id)} style={{color:"green"}} aria-label="view" size="large">
              <VisibilityIcon />
              </IconButton>
              <Tooltip onClick={()=>handleCreateOrder(order.id)} describeChild title="Please Click Me">
        <Button>Request</Button>
      </Tooltip>
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </>
  );
};

export default ManageOrder;