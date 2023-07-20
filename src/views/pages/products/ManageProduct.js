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



const ManageProduct=()=> {

  let navigate=useNavigate();

      const[error,setError]=useState(null);
      const[isLoaded,setIsLoaded]=useState(false);
      const[products,setProducts]=useState([]);

      useEffect(()=>{
        fetchProducts();
        
      },[]);

      function fetchProducts(){
        fetch(`${Config.baseUrl}/products`)
        .then((res)=>res.json())
        .then((result)=>{
          
          setIsLoaded(true);
          console.log(result);
          setProducts(result);
          console.log(products);
        }).catch((arr)=>{
          setError(arr);
        });
      }

      const handleEdit=(id)=>{
        navigate(`/edit-products/${id}`);
      }

      const handleDelete=(id)=>{
        const confirm=window.confirm("Are you sure?");   
        if((confirm)){

        fetch(`${Config.baseUrl}/products/${id}`, {
          method: 'DELETE',
         
        
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(products => {
          //console.log(data);
          fetchProducts();

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
   <h3>Manage Products</h3>
   <Link to="/Create-products" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",marginBottom:"10px",backgroundColor:"#4B0082"}}>
      Create Products
    </Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Price</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Created Date</StyledTableCell>
            <StyledTableCell>Updated Date</StyledTableCell>

            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>

              <StyledTableCell component="th" scope="row">
                {product.id}
              </StyledTableCell>
              <StyledTableCell >{product.name}</StyledTableCell>
              <StyledTableCell >{product.price}</StyledTableCell>
              <StyledTableCell >{product.description}</StyledTableCell>
              <StyledTableCell >{product.created_at}</StyledTableCell>
              <StyledTableCell >{product.updated_at}</StyledTableCell>
              
              <StyledTableCell >
              {/* <Button  onClick={()=>handleDelete(product.id)} style={{color:"red"}} startIcon={<DeleteIcon />}>
                 
            </Button>
            <Button  onClick={()=>handleEdit(product.id)} style={{color:"black"}} startIcon={<EditIcon/>}>
                
            </Button>
            <Button  style={{color:"green",borderRadius:"20px"}} startIcon={<VisibilityIcon/>}>
                
            </Button> */}

            <IconButton onClick={()=>handleDelete(product.id)} style={{color:"red"}} aria-label="delete" size="large">
              <DeleteIcon />
              </IconButton>
            <IconButton onClick={()=>handleEdit(product.id)} style={{color:"black"}} aria-label="edit" size="large">
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

export default ManageProduct;