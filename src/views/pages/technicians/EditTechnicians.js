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

const EditTechnicians=()=>{
    const{id}=useParams()

        const[name,setName]=useState("");
        const[mobile,setMobile]=useState("");
        const[email,setEmail]=useState("");
        const[city,setCity]=useState("");
        const[skill,setSkill]=useState("");


       const handleSubmit=(e)=>{
        e.preventDefault();
        let technicians={
            id:id,
            name:name,
            mobile:mobile,
            email:email,
            city:city,
            skill:skill,

        }

        fetch(`${Config.baseUrl}/technicians/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(technicians)
                  
             
        })
        .then(response => response.json())
        .then(technicians => console.log(technicians))
        .catch(error => console.error(error));
        }
        
       

        useEffect(()=>{
            fetch(`${Config.baseUrl}/technicians/${id}`,{

                method:'GET',
                
                
            })
              .then((res)=>res.json())  
              
              .then((res)=>{
                console.log(res);
                setName(res.name);
                setMobile(res.mobile);
                setEmail(res.email);
                setCity(res.city);
                setSkill(res.skill);

              });
        },[id]);

       

    return(
        <>
<h3>Edit Technicians</h3>
  <Link to="/manage-technicians" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px"}}>
      Manage Technicians
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
          label="City"
          multiline
          maxRows={4}
          value={city}
          style={{width:"70%"}}
          onChange={e=> setCity(e.target.value)}
        />
      </div>
        <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Skill"
          multiline
          maxRows={4}
          value={skill}
          style={{width:"70%"}}
          onChange={e=> setSkill(e.target.value)}
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
}
export default EditTechnicians;