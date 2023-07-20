import React,{useState} from 'react';
import './CreateLogin.css';
import Person2Icon from '@mui/icons-material/Person2';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from 'react-router-dom';
import { Config } from '../../../model/config';

const CreateLogin=()=>{
const navigate=useNavigate();

const [username,setuserName]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=(e)=>{

    e.preventDefault();

    let log={
        email:username,
        password:password
    }

    fetch(`${Config.baseUrl}/login`,{
        method:'POST',
        headers:{
          'content-type':'application/x-www-form-urlencoded'
        },
        body:new URLSearchParams(log).toString(),
        })
          .then(respons=> respons.json())
          .then(log=>{ 
            
            console.log(log)

            navigate("/home")
        
        })
          .then(error=> console.error(error))   
}


    return(
<>

<div className="wrapper">
        <div class="logo">
            <img src="https://w7.pngwing.com/pngs/65/649/png-transparent-orange-and-white-logo-operational-efficiency-business-computer-icons-operations-management-operational-excellence-icon-operations-drawing-miscellaneous-text-service-thumbnail.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Service Management
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
            <Person2Icon/>
                <input type="text" name="userName" id="userName" onChange={e => setuserName(e.target.value)} placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <KeyIcon/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="pwd" placeholder="Password"/>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>

</>
    );
}
export default CreateLogin;