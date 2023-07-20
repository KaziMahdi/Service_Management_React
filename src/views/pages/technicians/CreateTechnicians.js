import * as React from 'react';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../customer/customer.css';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';


import { useState,useEffect } from 'react';
import { Config } from '../../../model/config';
import { Grid } from 'rsuite';
import { Outlet, Link } from "react-router-dom";



const CreateTechnicians =()=>{

  const[name,setName]=useState("");
  const[mobile,setMobile]=useState("");
  const[email,setEmail]=useState("");
  const[city,setCity]=useState("");
  const[skill,setSkill]=useState("");

  
const handleSubmit=(e)=>{
  
  e.preventDefault();
  
  

  let technician={
    name:name,
    mobile:mobile,
    email:email,
    city:city,
    skill:skill,
}

fetch(`${Config.baseUrl}/technicians`,{
method:'POST',
headers:{
  'content-type':'application/x-www-form-urlencoded'
},
body:new URLSearchParams(technician).toString(),
})
  .then(respons=> respons.json())
  .then(technician=> console.log(technician))
  .then(error=> console.error(error))   
    
}

  const[skills,getSkills]=useState([]);


useEffect(()=>{

  fetchSkills();

},[]);

function fetchSkills() {
  fetch(`${Config.baseUrl}/skills`)
    .then((res) => res.json())
    .then((result) => {
      
      console.log(result);
      getSkills(result);
      console.log(skills);
    })
    
}

    

    return(
    <>
   <h3>Create Technicians</h3>
  <Link to="/manage-technicians" style={{textDecoration:"none",color:"black"}}>
    <Button variant="contained" disableElevation style={{marginLeft:"15px",backgroundColor:"#4B0082"}}>
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
          label="City"
          multiline
          maxRows={4}
          style={{width:"70%"}}
          onChange={e=> setCity(e.target.value)}
        />
      </div>
        <div>
        <FormControl sx={{ width:678}}>
                <InputLabel id="demo-simple-select-label">Position</InputLabel>
                <Select
                  onChange={(e) => setSkill(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  input={<OutlinedInput label="Position" />}
                  
                >
                  {skills.map((skill) => (
                    <MenuItem key={skill.id} value={skill.id}>
                      {skill.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
)
}
export default CreateTechnicians;