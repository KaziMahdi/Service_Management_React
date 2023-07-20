import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Config } from '../../../model/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {useState,useEffect} from 'react';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

      //To get the data from MYData
    const getLocalItmes=()=>{
      let data=localStorage.getItem('myData');
      console.log(data);
      if(data){
        return JSON.parse (localStorage.getItem('myData'));
      }else{
        return [];
      }
          }

const CreateOrder = () => {

  

  const [data, setData] = useState(getLocalItmes());
  
  const [showForm, setShowForm] = useState(false);

  const [submissionStatus, setSubmissionStatus] = useState('');

  const [product, setProduct] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [cost, setCost] = useState('');
  const [technician_id,setTechnician_id]=useState('');
  const [remark,setRemark]=useState('');
  const [service_request_id,setService_request_id]=useState(1);
  

  // for auto set date
  const currentDate = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(currentDate);



// local storage data save

useEffect(() => {
  localStorage.setItem('myData',JSON.stringify(data));

}, [data]);

useEffect(() => {
  // retrieve the last used order_id from local storage
  const lastOrderId = localStorage.getItem("lastOrderId");
  if (lastOrderId) {
    setService_request_id(parseInt(lastOrderId) + 1);
  }
}, []);

// data transfire

  const handleSubmit=(e)=>{
    e.preventDefault();

    // console.log(customer_id);
    // console.log(date);
    // console.log(remark);
    
  
    

    let request={
      technician_id:technician_id,
      date:date,
      remark:remark
    }
    fetch(`${Config.baseUrl}/requests`,{
      method:'POST',
      headers:{
        'content-type':'application/x-www-form-urlencoded'
      },
      body:new URLSearchParams(request).toString(),
      })
        .then(respons=> respons.json())
        .then((request)=>{ 
          console.log(request)
          window.alert('Record created successfully!');
          setSubmissionStatus("success");
        })
        .then((error)=>{ 
          console.error(error)
          
        })  
        
        
        let details
        
        {data.map((item) => (
          details={
          service_request_id:service_request_id,
          product:item.product,
          problem:item.problem,
          solution:item.solution,
          cost:item.cost
           }
          

        ))}
        
        fetch(`${Config.baseUrl}/requestdetails`,{
          method:'POST',
          headers:{
            'content-type':'application/x-www-form-urlencoded'
          },
          body:new URLSearchParams(details).toString(),
          })
            .then(respons=> respons.json())
            .then((details)=>{ 
              console.log(details)
              setSubmissionStatus("success");
            })
            .then((error)=>{ 
              console.error(error)
              
            })  
            localStorage.setItem("lastOrderId", service_request_id);
          }
  
          const handleRemove = (index) => {
            const newItems = [...data];
            newItems.splice(index, 1);
            setData(newItems);
            localStorage.setData('myData', JSON.stringify(newItems));
          };



  const handleAddRow = () => {
    setData([...data, { product, problem, solution, cost }]);
    setShowForm(false);
    setProduct('');
    setProblem('');
    setSolution('');
    setCost('');
    
  };

  // for dropdawn

      const[technicians,setTechnicians]=useState([]);

      
      // const handleChange = (event) => {
      //   setCustomers(event.target.customer.id);
      // };
      useEffect(()=>{
        fetchTechnicians();
        
      },[]);

      function fetchTechnicians(){
        fetch(`${Config.baseUrl}/technicians`)
        .then((res)=>res.json())
        .then((result)=>{
          
          setTechnicians(result);
          
        })
      }

      


  return (
    
    <>
    <div>
      {submissionStatus === "success" && (
        <div className="alert alert-success" role="alert">
          Submission successful!
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="alert alert-danger" role="alert">
          Error submitting form. Please try again.
        </div>
      )}
    <div style={{ border:"3px solid orange",  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
      <div style={{ display: "flex", justifyContent: "space-around" , paddingTop:"50px"}}>
        <div>
          <span><b>Kazi Service Management</b></span><br />
          <span>Mobile:01518389862</span><br />
          <span>Email:kazi@gmail.com</span><br />
          <span>Address:Dhanmondi</span><br />
        </div>

        <div style={{ marginLeft: "20px" }}>
        <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native"><b>Technician</b></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={e => setTechnician_id(e.target.value)}
          input={<BootstrapInput />}
        >
            {technicians.map((technician) => (
            <MenuItem
              key={technician.id}
              value={technician.id}
              
            >
              {technician.name}
            </MenuItem>
          ))}
      
         
        </Select>
      </FormControl>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex" }}>
            <div><b>Request ID</b></div>
            <div>
              <input type="text" className="form-control" value={service_request_id} onChange={e => setService_request_id(e.target.value)} style={{ width: "60%", marginLeft: "30px" }} Controlid="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div><b>Request Date</b></div>
            <div>
              <input type="date" id='date' name='date' value={date} onChange={e => setDate(e.target.value)} className="form-control" style={{ width: "80%", marginLeft: "15px" }} Controlid="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "50px" }}>

      </div>
      <Table striped bordered hover size="sm" >
        <thead style={{ backgroundColor: "orange", textAlign: "center",color:"black"}}>
          <tr>

            <th>SN</th>
            <th>Product</th>
            <th>Problem</th>
            <th>Solution</th>
            <th>Cost</th>
            <th><Button variant="danger" onClick={() => setShowForm(true)} style={{backgroundColor:"#805300"}}><b>Show</b></Button>{' '}</th>
          </tr>
        </thead>
        <tbody >
        {showForm && (
          <tr style={{ backgroundColor: "orange" }}>
            <td></td>
            <td><Form.Control type="text" value={product} onChange={e => setProduct(e.target.value)} /></td>
            <td><Form.Control type="text" value={problem} onChange={e => setProblem(e.target.value)} /></td>
            <td><Form.Control type="text" value={solution} onChange={e => setSolution(e.target.value)}/></td>
            <td><Form.Control type="text" value={cost} onChange={e => setCost(e.target.value)}/></td>
            <td><Button variant="light" onClick={handleAddRow}><b>+</b></Button>{' '}</td>
            
          </tr>
          )}
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.product}</td>
              <td>{row.problem}</td>
              <td>{row.solution}</td>
              <td>{row.cost}</td>
              
              <td> <button onClick={() => handleRemove(index)} style={{marginLeft:"5%",backgroundColor:"#EB455F",border:"none",borderRadius:"20px"}}>Remove</button></td>
            </tr>
          ))}
        
        </tbody>
      </Table>

      <div style={{ display: "flex", width: "100%", padding: "20px" }}>
        <div style={{ marginTop: "100px", width: "200px" }}>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Remark"

          >
            <Form.Control as="textarea" onChange={e => setRemark(e.target.value)} placeholder="Leave a comment here" />
          </FloatingLabel>
        </div>

        <div style={{marginTop: "100px",  marginLeft: "60%", float: "right" }} >
          <Button onClick={handleSubmit} variant="warning" style={{ width: "150px", height: "40px" }} active>Button Procces</Button>{' '}
        </div>
      </div>
      </div>
      </div>
    </>

  );
}
export default CreateOrder;