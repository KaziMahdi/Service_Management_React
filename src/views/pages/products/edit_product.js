import * as React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../customer/customer.css';



import { Grid } from 'rsuite';
import { Outlet, Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Config } from "../../../model/config";

const EditProduct =()=>{

        const{id}=useParams()

        const[name,setName]=useState("");
        const[price,setPrice]=useState("");
        const[description,setDescription]=useState("");
        

       const handleSubmit=(e)=>{
        e.preventDefault();
        let products={
            id:id,
            name:name,
            price:price,
            description:description,
            

        }

        fetch(`${Config.baseUrl}/products/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(products)
                  
             
        })
        .then(response => response.json())
        .then(products => console.log(products))
        .catch(error => console.error(error));
        }
        
       

        useEffect(()=>{
            fetch(`${Config.baseUrl}/products/${id}`,{

                method:'GET',
                
                
            })
              .then((res)=>res.json())  
              
              .then((res)=>{
                console.log(res);
                setName(res.name);
                setPrice(res.price);
                setDescription(res.description);
                

              });
        },[id]);

       


    return(
        <>
    <h3>Edit Products</h3>
  <Link to="/manage-products" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px"}}>
      Manage Products
    </Button>
  </Link>
    <form onSubmit={handleSubmit}>
    
    <Grid
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      
    >
      
       <div style={{display:"flex",flexDirection:"column",margin:"5px",padding:"10px",gap:"10px"}}> 
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          value={name}
          onChange={e => setName(e.target.value)}
          style={{width:"70%"}}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Price"
          multiline
          maxRows={4}
          value={price}
          onChange={e => setPrice(e.target.value)}
          style={{width:"70%"}}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          style={{width:"70%"}}
          onChange={e => setDescription(e.target.value)}
        />
        </div>
        
      </div>
      <Stack direction="row" spacing={2}>
        <Button type='submit' variant="outlined" style={{marginLeft:"15px",backgroundColor:"green",color:"white"}}>
         Save
        </Button>
    </Stack>
      </Grid>
      
      </form>
    </>
    );
};
export default EditProduct;