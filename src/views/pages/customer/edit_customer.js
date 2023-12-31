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

const EditCustomer =()=>{

        const{id}=useParams()

        const[name,setName]=useState("");
        const[mobile,setMobile]=useState("");
        const[email,setEmail]=useState("");
        const[Address,setAddress]=useState("");

       const handleSubmit=(e)=>{
        e.preventDefault();
        let customers={
            id:id,
            name:name,
            mobile:mobile,
            email:email,
            Address:Address,

        }

        fetch(`${Config.baseUrl}/customers/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(customers)
                  
             
        })
        .then(response => response.json())
        .then(customers => console.log(customers))
        .catch(error => console.error(error));
        }
        
       

        useEffect(()=>{
            fetch(`${Config.baseUrl}/customers/${id}`,{

                method:'GET',
                
                
            })
              .then((res)=>res.json())  
              
              .then((res)=>{
                console.log(res);
                setName(res.name);
                setMobile(res.mobile);
                setEmail(res.email);
                setAddress(res.Address);

              });
        },[id]);

       


    return(
        <>
    <h3>Edit Customer</h3>
  <Link to="/manage-customer" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px"}}>
      Manage Customer
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
          label="Mobile"
          multiline
          maxRows={4}
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          style={{width:"70%"}}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          value={email}
          style={{width:"70%"}}
          onChange={e => setEmail(e.target.value)}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          value={Address}
          style={{width:"70%"}}
          onChange={e=> setAddress(e.target.value)}
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
export default EditCustomer;