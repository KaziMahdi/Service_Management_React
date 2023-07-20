import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Config } from '../../../model/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const CreateOrder=()=>{
  return(
    
<>
<div style={{display:"flex",justifyContent:"space-around"}}>
    <div>
      <span><b>Kazi Service Management</b></span><br/>
      <span>Mobile:01518389862</span><br/>
      <span>Email:kazi@gmail.com</span><br/>
      <span>Address:Dhanmondi</span><br/>
    </div>

    <div style={{marginLeft:"20px"}}>
    <label for="exampleInputEmail1" className='form-label'><b>Customer</b></label>
    <input type="text" className="form-control" style={{width:"70%"}} Controlid="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    
  <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
    <div style={{display:"flex"}}>
    <div><b>Order ID</b></div>
    <div>
    <input type="text" className="form-control" style={{width:"60%",marginLeft:"30px"}} Controlid="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    </div>
    <div style={{display:"flex"}}>
    <div><b>Order Date</b></div>
    <div>
    <input type="text" className="form-control" style={{width:"60%",marginLeft:"15px"}} Controlid="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    </div>
  </div>
  </div>
      <div style={{marginBottom:"50px"}}>

      </div>
    <Table striped bordered hover size="sm" >
      <thead style={{backgroundColor:"#E5E0FF",textAlign:"center"}}>
        <tr>
          
          <th>SN</th>
          <th>Product</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Email</th>
          <th><Button variant="light"><b>-</b></Button>{' '}</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:"#ECF2FF"}}>
        <tr>
          <td></td>
          <td><Form.Control type="text" /></td>
          <td><Form.Control type="text" /></td>
          <td><Form.Control type="text" /></td>
          <td><Form.Control type="text" /></td>
          <td><Button variant="light"><b>+</b></Button>{' '}</td>
        </tr>
      </tbody>
    </Table>

<div style={{display:"flex",width:"100%"}}>
    <div style={{marginTop:"100px",width:"200px"}}>
          <FloatingLabel
        controlId="floatingTextarea"
        label="Remark"   
        
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      </div>
      
   <div style={{marginTop:"150px",marginLeft:"60%",float:"right"}} >
   <Button variant="warning" style={{width:"150px",height:"40px"}} active>Button Procces</Button>{' '}
   </div> 
   </div>
</>
    
  );
}
export default CreateOrder;