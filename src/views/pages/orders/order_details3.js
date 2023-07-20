import React from 'react';
import { Button } from 'react-bootstrap';
import CircleIcon from '@mui/icons-material/Circle';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { Config } from '../../../model/config';
import { useParams } from "react-router-dom";

import './order.css';


const OrderDetails=()=>{
   
  const{id}=useParams()
  const handleClick = () => {
    window.print();
  };
  const [orders,setOrders]=useState("");
  // console.log(orders);
  const [orderdetails,setOrderDetails]=useState([]);

  useEffect(()=>{
    fetch(`${Config.baseUrl}/serviceorders/${id}`,{

        method:'GET',
        
        
    })
    .then((res)=>res.json())
    .then((res)=>{
      // console.log(res);
        setOrders(res);
        

      });
    },[id]);

    useEffect(()=>{
      fetchCustomers();
      
    },[]);


function fetchCustomers(){
  fetch(`${Config.baseUrl}/serviceorderdetails`)
  .then((res)=>res.json())
  .then((result)=>{
    
    setOrderDetails(result);
    
  })
  
}
 



  return(
        <>
          
        
           
        
        <div className="card" style={{width:"100%", boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}} >
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{color:"#7e8d9f",fontSize:"20px"}}>Invoice <strong>ID: #</strong></p>
        </div>
        <div className="col-xl-3" style={{display:"flex"}}>
        <Link to="#" rel="noopener" target="_blank" class="btn btn-default" className="btn  text-capitalize border-0" data-mdb-ripple-color="dark" onClick={handleClick}>
              <PrintIcon style={{color:"green"}}/> Print</Link>
          <a className="btn  text-capitalize border-0" data-mdb-ripple-color="dark"><PictureAsPdfIcon style={{color:"red"}}/> Export</a>
        </div>
        <hr/>
      </div>

      <div className="container" class="print-section">
        <div className="col-md-12" >
          <div className="text-center">
          <img src='https://logodix.com/logo/620693.png' style={{width:"70px",height:"70px"}}></img>
            <p className="pt-0"><b>Kazi Service Management</b></p>
          </div>

        </div>


        <div className="row">
          <div className="col-xl-8">
            
             <ul className="list-unstyled">
             <li className="text-muted">To: <span style={{color:"#5d9fc5"}}>{orders.customer_id}</span></li>
             <li className="text-muted">Street: </li>
             <li className="text-muted">State, Country</li>
             <li className="text-muted"><SettingsPhoneIcon/></li>
            </ul>
            
           
          </div>
          <div className="col-xl-4">
            <p className="text-muted">Invoice</p>

            {/* {orderdetails.map((detail)=>( */}

            <ul className="list-unstyled">
              <li className="text-muted"><span><CircleIcon style={{color:"#FFC107 "}}/>ID:</span>#</li>
              <li className="text-muted"><span><CircleIcon style={{color:"#FFC107 "}}/>Order Date: </span></li>
              <li className="text-muted"><span><CircleIcon style={{color:"#FFC107 "}}/>Status:</span><span className="badge bg-warning text-black fw-bold">
                  Unpaid</span></li>
            </ul>
             {/* ))} */}
          </div>
        </div>

        <div className="row my-2 mx-1 justify-content-center">
          <table className="table table-striped table-borderless">
            <thead style={{backgroundColor:"#FFC107"}} className="text-black">
              <tr>
              
                <th scope="col">SN</th>
                <th scope="col">Product</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                 
              </tr>
            </thead>
            <tbody>
            {orderdetails.map((detail)=>(
              <tr>
                <th scope="row">{detail.id}</th>
                <td>{detail.product}</td>
                <td>{detail.mobile}</td>
                <td>{detail.address}</td>
                <td>{detail.email}</td>
                
              </tr>
              ))} 
              {/* <tr>
                <th scope="row">2</th>
                <td>Web hosting</td>
                <td>1</td>
                <td>$10</td>
                <td>$10</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Consulting</td>
                <td>1 year</td>
                <td>$300</td>
                <td>$300</td>
              </tr> */}
            </tbody>

          </table>
        </div>
        <div className="row">
          <div className="col-xl-8">
            

          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>$1110</li>
              <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Tax(15%)</span>$111</li>
            </ul>
            <p className="text-black float-start"><span className="text-black me-3"> Total Amount</span><span
                style={{fontSize: "25px"}}>$1221</span></p>
          </div>
        </div>
       
        <hr/>
        <div className="row">
          <div className="col-xl-10">
            <p>Thank you for your comming</p>
          </div>
          <div className="col-xl-2">
            <button type="button" className="btn btn-primary text-capitalize"
              style={{backgroundColor:"#000080"}}>Pay Order</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
      
        </>
    )
}
 
export default OrderDetails;