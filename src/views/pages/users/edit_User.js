import * as React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../customer/customer.css';
import { useForm } from 'react-hook-form';


import { Grid } from 'rsuite';
import { Outlet, Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Config } from "../../../model/config";
import Form from 'react-bootstrap/Form';

const EditUser =()=>{

        const{id}=useParams()

        const { register, handleSubmit } = useForm();

        const[username,setUsername]=useState("");
        const[password,setPassword]=useState("");
        const[email,setEmail]=useState("");
        const[role_id,setRole_id]=useState("");

        const onSubmit = (data) => {
   
          let formData=new FormData();
          formData.append("username",username);
          formData.append("password",password);
          formData.append("email",email);
          formData.append("role_id",role_id);
          formData.append("file",data.file[0]);
          
            
            fetch(`${Config.baseUrl}/users/${id}`, {
            method: 'PUT', 
            headers: {
             'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));    
          
       }

      //  const handleSubmit=(e)=>{
      //   e.preventDefault();
      //   let users={
      //       id:id,
      //       username:username,
      //       password:password,
      //       email:email,
      //       role_id:role_id,

      //   }

      //   fetch(`${Config.baseUrl}/users/${id}`,{
      //       method:'PUT',
      //       headers: {
      //           'Content-Type': 'application/json'
      //         },
              
      //         body: JSON.stringify(users)
                  
             
      //   })
      //   .then(response => response.json())
      //   .then(users => console.log(users))
      //   .catch(error => console.error(error));
      //   }
        
       

        useEffect(()=>{
            fetch(`${Config.baseUrl}/users/${id}`,{

                method:'GET',
                
                
            })
              .then((res)=>res.json())  
              
              .then((res)=>{
                console.log(res);
                setUsername(res.username);
                setPassword(res.password);
                setEmail(res.email);
                setRole_id(res.role_id);

              });
        },[id]);

       


    return(
        <>
    <h3>Edit User</h3>
  <Link to="/manage-user" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px"}}>
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
          value={username}
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
          value={password}
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
          value={email}
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
          value={role_id}
          style={{width:"70%"}}
          onChange={e=> setRole_id(e.target.value)}
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
        <Button type='submit' variant="outlined" style={{marginLeft:"15px",backgroundColor:"green",color:"white"}}>
         Save
        </Button>
    </Stack>
      </Grid>
      
      </form>
    </>
    );
};
export default EditUser;