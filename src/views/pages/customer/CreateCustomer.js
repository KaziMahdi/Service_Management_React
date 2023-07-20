import * as React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../customer/customer.css';


import { useState } from 'react';
import { Config } from '../../../model/config';
import { Grid } from 'rsuite';
import { Outlet, Link } from "react-router-dom";

export default function CreateCustomer(props){

  const[name,setName]=useState("");
  const[mobile,setMobile]=useState("");
  const[email,setEmail]=useState("");
  const[Address,setAddress]=useState("");

  
const handleSubmit=(e)=>{
  
  e.preventDefault();
  
  

  let customer={
    name:name,
    mobile:mobile,
    email:email,
    Address:Address,
}

fetch(`${Config.baseUrl}/customers`,{
method:'POST',
headers:{
  'content-type':'application/x-www-form-urlencoded'
},
body:new URLSearchParams(customer).toString(),
})
  .then(respons=> respons.json())
  .then(customer=> console.log(customer))
  .then(error=> console.error(error))   
    
}
return(
    <>
    <h3>Create Customer</h3>
  <Link to="/manage-customer" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",backgroundColor:"#4B0082"}}>
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
          style={{width:"70%"}}
          onChange={e=> setAddress(e.target.value)}
        />
      </div>
      </div>
      <Stack direction="row" spacing={2}>
        <Button type='submit' className='cont' variant="outlined" style={{marginLeft:"15px",backgroundColor:"#006400",color:"white"}}>
         Save
        </Button>
    </Stack>
      </Grid>
      
      </form>
    </>
)
}
 