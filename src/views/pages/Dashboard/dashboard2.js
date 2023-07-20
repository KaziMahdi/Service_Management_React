import * as React from 'react';

import './Dashboard.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Person3Icon from '@mui/icons-material/Person3';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentsIcon from '@mui/icons-material/Payments';

const Dashboard=()=> {
    
      return (

        <>
<h3>My Dashboard</h3>

<div class="dash">
<mat-card class="example-card" id="order">
<Person3Icon/>
  <mat-card-header>
    <mat-card-title>New Customers</mat-card-title><br/>
    <mat-card-title>50</mat-card-title><br/>

  </mat-card-header>
  
  <mat-card-actions>
    
    <button class="more" mat-button><NavigateNextIcon/>More Details</button>
    
  </mat-card-actions>
</mat-card>
<mat-card class="example-card" id="customer">
    <RedeemIcon/>
    <mat-card-header>
      <mat-card-title>New Orders</mat-card-title><br/>
      <mat-card-title>100000/-</mat-card-title><br/>
      
    </mat-card-header>
    
    <mat-card-actions>
      <button class="more" mat-button><NavigateNextIcon/>More Details</button>
    </mat-card-actions>
  </mat-card>
  <mat-card class="example-card" id="case">
    <PaymentsIcon/>
    <mat-card-header>
      <mat-card-title>New Record</mat-card-title><br/>
      <mat-card-title>30000/=</mat-card-title><br/>
    </mat-card-header>
    
    <mat-card-actions>
      <button class="more"><NavigateNextIcon/>More Details</button>
    </mat-card-actions>
  </mat-card>
</div>
        
  <br/>
<div style={{display:"flex"}}>
<Card className="text-black" >
<Card.Img src="https://img.exaly.com/journal-chart/27784/impact-factor/graph.svg" style={{width:"500px",height:"400px"}} alt="Card image"
/>

<Card.ImgOverlay>
  
</Card.ImgOverlay>

</Card>
<Table striped bordered hover>
      
      <tbody >
       <img src='https://flex.bi/wp-content/uploads/2018/07/location-dashboard.png' style={{width:"650px",paddingLeft:"180px"}}/>
      </tbody>
    </Table>
</div>
</>
      );
    }
 
  
  export default Dashboard;