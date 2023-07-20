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

const EditService =()=>{

        const{id}=useParams()

        const[name,setName]=useState("");
        

       const handleSubmit=(e)=>{
        e.preventDefault();
        let services={
            id:id,
            name:name,
            

        }

        fetch(`${Config.baseUrl}/services/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(services)
                  
             
        })
        .then(response => response.json())
        .then(services => console.log(services))
        .catch(error => console.error(error));
        }
        
       

        useEffect(()=>{
            fetch(`${Config.baseUrl}/services/${id}`,{

                method:'GET',
                
                
            })
              .then((res)=>res.json())  
              
              .then((res)=>{
                console.log(res);
                setName(res.name);
                

              });
        },[id]);

       


    return(
        <>
    <h3>Edit Service</h3>
  <Link to="/manage-services" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px"}}>
      Manage Service
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
export default EditService;