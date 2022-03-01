import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft' >
      
    <span className='logo'>
        <Link to="" refresh="true" className="link">
          Ur Manager
       </Link>
       </span>
       </div>
       
       
                  
        <div className='topRight'>
        <div className='topbarIconContainer'>
        <NotificationsNone/>
        <span className="topIconBadge">2</span>
        
        </div>
        
        
        <div className='topbarIconContainer'>
        <Settings/>
        </div>
        
        <div className='topbarIconContainer'>
        <Logout/>
        </div>
        
        <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className='topAvatar'/>
        </div>
        </div>  
        
        </div>
        )
      }
      
export default Topbar