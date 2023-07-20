import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import '../layout/layout.css';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Outlet, Link } from "react-router-dom";


import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import HailIcon from '@mui/icons-material/Hail';
import HandymanIcon from '@mui/icons-material/Handyman';
import DvrIcon from '@mui/icons-material/Dvr';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import WcIcon from '@mui/icons-material/Wc';
import ExtensionIcon from '@mui/icons-material/Extension';
import InputIcon from '@mui/icons-material/Input';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  

  
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% )` },
          
        }}
      >
        <Toolbar style={{paddingLeft:200,backgroundColor:"#FFC107"}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          style={{color:"black"}}>
          
          </Typography>
          <Search>
            <SearchIconWrapper style={{float:'right'}}>
              <SearchIcon style={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{color:"black"}}/>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon style={{color:"black"}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{color:"black"}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle style={{color:"black"}}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Drawer 
        
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
          open
        >
          <div style={{display:"flex"}}>
          <div style={{backgroundColor:"#FFC107",height:"63px"}} className="image-container">
            <img src="https://t4.ftcdn.net/jpg/02/28/27/15/360_F_228271553_LUViPak2OFPun53UgvkE21BlTr7uC3KO.jpg" style={{width:"40px",height:"40px",borderRadius:"50%",marginTop:"5px"}}/>
            </div>
            <div style={{backgroundColor:"#FFC107",height:"63px",width:"100%"}}>
            <p style={{fontSize:"16px",fontWeight:"bold",marginTop:"15px"}}> &nbsp;Service Management</p>
          </div>
          </div>
         {/* <div>
          <img src='https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' width={70} height={70} style={{marginLeft:60,marginTop:10,borderRadius:50}}></img>
          </div>
          <div style={{marginLeft:60}}>
            Kazi Mahdi
          </div>
           */}
          <Accordion>
          <Link to="/dashboard" style={{textDecoration:"none",color:"black"}}>
            <AccordionSummary className='hov'>
            
              <Typography>
              <AccountBalanceIcon style={{height:"20px",color:"Purple"}}/> Dashboard
              </Typography>
            
            </AccordionSummary>
           </Link>
          </Accordion>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <GroupsIcon style={{height:"25px",color:"Purple"}}/> Customers
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Link to="/create-customer" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
            <TripOriginIcon style={{height:"15px"}}/>Create Customer
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-customer" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Customer
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
          <HailIcon style={{color:"Purple"}}/> Technicians
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/Create-technicians" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create Technician
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-technicians" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Technician
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
          <HandymanIcon style={{color:"Purple"}}/> services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/Create-services" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create Service
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-services" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Service
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <DvrIcon style={{height:"20px",color:"Purple"}}/> Products
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/Create-products" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create Product
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-products" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Product
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <AddShoppingCartIcon style={{height:"20px",color:"Purple"}}/> Service Orders
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Link to="/Create-orders" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create Order
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-orders" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Order
          </Typography>
          </Link>
         
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <SportsKabaddiIcon style={{color:"Purple"}}/> Service Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* <Link to="/Create-request" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create request
          </Typography>
          </Link> */}
          {/* &nbsp; */}
          <Link to="/manage-request" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage request
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>
      

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <WcIcon style={{color:"Purple"}}/> Service Records
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {/* <Link to="/Create-record" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create Records
          </Typography>
          </Link>
          &nbsp; */}
          <Link to="/manage-record" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage Records
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='hov'>
          <Typography >
            <ExtensionIcon style={{height:"20px",color:"Purple"}}/> System
          </Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Link to="/Create-user" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Create User
          </Typography>
          </Link>
          &nbsp;
          <Link to="/manage-user" style={{textDecoration:"none",color:"black"}}>
        <Typography className='sub'>
        <TripOriginIcon style={{height:"15px"}}/>Manage User
          </Typography>
          </Link>
        </AccordionDetails>
      </Accordion>


   



      <Accordion >
      <Link to="Log" style={{textDecoration:"none",color:"black"}}>
            <AccordionSummary className='hov'>
              <Typography >
                <InputIcon style={{height:"20px",color:"Purple"}}/> Log-Out
              </Typography>
            </AccordionSummary>
      </Link>
          </Accordion>

        

        </Drawer>
      </Box>
      <Box
      component="main"
      sx={{ 
        flexGrow: 1, 
        p: 3, 
        width: { sm: `calc(100% - ${drawerWidth}px)` } 
      }}
    >
      <Toolbar />
      <Outlet />
    </Box>
    </Box>
    
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;