import * as React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../customer/customer.css';

import { useState } from 'react';
import { Config } from '../../../model/config';
import { Grid } from 'rsuite';
import { Outlet, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const CreateUser=()=>{

  const { register, handleSubmit } = useForm();

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[role_id,setRoleid]=useState("");
  
    
   const onSubmit = (data) => {
   
      let formData=new FormData();
      formData.append("username",username);
      formData.append("password",password);
      formData.append("email",email);
      formData.append("role_id",role_id);
      formData.append("file",data.file[0]);
      
        
        fetch(`${Config.baseUrl}/users`, {
        method: 'POST',  
        body:formData 
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));    
      
   }


  return (
   <>
  <h3>Create User</h3>
  <Link to="/manage-user" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",backgroundColor:"#4B0082"}}>
      Manage User
    </Button>
  </Link>
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
    
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
          label="User Name"
          multiline
          maxRows={4}
          onChange={e => setUsername(e.target.value)}
          style={{width:"70%"}}
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          multiline
          maxRows={4}
          onChange={e => setPassword(e.target.value)}
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
          label="Role ID"
          multiline
          maxRows={4}
          style={{width:"70%"}}
          onChange={e=> setRoleid(e.target.value)}
        />

      </div>
      <div>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" {...register("file")} style={{width:"70%"}}/>
      </Form.Group>
      </div>
      </div>
      <Stack direction="row" spacing={2}>
        <Button type='submit' variant="outlined" style={{marginLeft:"15px",backgroundColor:"#006400",color:"white"}}>
         Save
        </Button>
    </Stack>
      </Grid>
      
      </form>
   
   </>
  );
}
export default CreateUser;