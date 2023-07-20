
import './card.css';
import './fontawsome.css';
import Chart from "react-apexcharts";
import { useState } from 'react';
import Groups3Icon from '@mui/icons-material/Groups3';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
const Dashboard=()=> {
    const [state,setState]=useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [30, 45, 45, 55, 49, 80, 70, 91]
          }
        ]
      }

    )
      return (

        <>
 <div className="container-fluid">


<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
</div>

<div className="row">

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            New (Customers)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">20</div>
                    </div>
                    <div className="col-auto">
                        <Groups3Icon/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            New (Orders)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">50</div>
                    </div>
                    <div className="col-auto">
                        <AddShoppingCartIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Complete (Record)
                        </div>
                        <div claclassNamess="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">80%</div>
                            </div>
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <ContentPasteIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                    <div className="col-auto">
                        <DesktopAccessDisabledIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



</div>

<div className="container-fluid">

                    
                    <h1 className="h3 mb-2 text-gray-800">Charts</h1>
                    
                    
                    <div className="row">

                        <div className="col-xl-8 col-lg-7">

                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                       
                                        <Chart
                                              options={state.options}
                                              series={state.series}
                                              type="bar"
                                              width="600"
                                              
                                            
                                            
                                       />
                                        
                                    </div>
                                    <hr/>
                                    
                                </div>
                            </div>

                            
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
                                </div>
                                <div className="card-body">
                                    <div className="chart-bar">
                                    <Chart
                                              options={state.options}
                                              series={state.series}
                                              type="area"
                                              width="600"
                                              
                                            
                                            
                                       />
                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                        
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
                                </div>
                                
                                <div className="card-body" >
                                    <div className="chart-pie pt-4" style={{width:"200px"}}>
                                    <Chart
                                              options={state.options}
                                              series={state.series}
                                              type="histogram"
                                              width="100"
                                              
                                            
                                            
                                       />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
</>
      );
    }
 
  
  export default Dashboard;