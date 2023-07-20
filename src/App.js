
import './App.css';
import ResponsiveDrawer from './views/layout/layout'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import CreateCustomer from './views/pages/customer/CreateCustomer';
import ManageCustomer from './views/pages/customer/ManageCustomer';
import EditCustomer from './views/pages/customer/edit_customer';

import CreateTechnicians from './views/pages/technicians/CreateTechnicians';
import ManageTechnicians from './views/pages/technicians/ManageTechnicians';
import EditTechnicians from './views/pages/technicians/EditTechnicians';

import CreateService from './views/pages/service/CreateService';
import ManageService from './views/pages/service/ManageService';
import EditService from './views/pages/service/edit_service';

import CreateProduct from './views/pages/products/CreateProduct';
import ManageProduct from './views/pages/products/ManageProduct';
import EditProduct from './views/pages/products/edit_product';

import CreateOrder from './views/pages/orders/CreateOrder';
import ManageOrder from './views/pages/orders/ManageOrder';
import EditOrder from './views/pages/orders/edit_order';
import OrderDetails from './views/pages/orders/OrderDetails';


import CreateOrderRecord from './views/pages/order_record/CreateRecord';
import ManageOrderRecord from './views/pages/order_record/ManageRecord';
import EditOrderRecord from './views/pages/order_record/edit_Record';
import DetailsRecord from './views/pages/order_record/DetailsRecord';

import CreateOrderRequest from './views/pages/order_request/CreateOrderRequest';
import ManageOrderRequest from './views/pages/order_request/ManageOrderRequest';
import EditOrderRequest from './views/pages/order_request/edit_OrderRequest';
import OrderDetailsRequest from './views/pages/order_request/DetailsRequest';

import CreateUser from './views/pages/users/CreateUser';
import ManageUaer from './views/pages/users/ManageUser';
import EditUser from './views/pages/users/edit_User';

import Dashboard from './views/pages/Dashboard/dashboard';

import CreateLogin from './views/pages/login/CreateLogin';


function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="Log" element={<CreateLogin/>} />
    
      <Route path="/" element={<ResponsiveDrawer/>}>
      <Route index element={<Dashboard/>} />
      {/* <Route path="manage-customer" element={<Home/>} /> */}

      
      <Route path="dashboard" element={<Dashboard/>} />
      
      <Route path="create-customer" element={<CreateCustomer/>} />
      <Route path="manage-customer" element={<ManageCustomer/>} />
      <Route path="edit-customer/:id" element={<EditCustomer/>} />

      <Route path="Create-technicians" element={<CreateTechnicians/>} />
      <Route path="manage-technicians" element={<ManageTechnicians/>} />
      <Route path="edit-technicians/:id" element={<EditTechnicians/>} />

      <Route path="Create-services" element={<CreateService/>} />
      <Route path="manage-services" element={<ManageService/>} />
      <Route path="edit-services/:id" element={<EditService/>} />

      <Route path="Create-products" element={<CreateProduct/>} />
      <Route path="manage-products" element={<ManageProduct/>} />
      <Route path="edit-products/:id" element={<EditProduct/>} />

      <Route path="Create-orders" element={<CreateOrder/>} />
      <Route path="manage-orders" element={<ManageOrder/>} />
      <Route path="edit-orders/:id" element={<EditOrder/>} />
      <Route path="order-details/:id" element={<OrderDetails/>} />
      <Route path="Create-request/:id" element={<CreateOrderRequest/>} />
      
      <Route path="Create-request" element={<CreateOrderRequest/>} />
      <Route path="manage-request" element={<ManageOrderRequest/>} />
      <Route path="edit-request/:id" element={<EditOrderRequest/>} />
      <Route path="details-request/:id" element={<OrderDetailsRequest/>} />
      <Route path="Create-record/:id" element={<CreateOrderRecord/>} />

      <Route path="Create-record" element={<CreateOrderRecord/>} />
      <Route path="manage-record" element={<ManageOrderRecord/>} />
      <Route path="edit-record/:id" element={<EditOrderRecord/>} />
      <Route path="details-record/:id" element={<DetailsRecord/>} />

      <Route path="Create-user" element={<CreateUser/>} />
      <Route path="manage-user" element={<ManageUaer/>} />
      <Route path="edit-user/:id" element={<EditUser/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
