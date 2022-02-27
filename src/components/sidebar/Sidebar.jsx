
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Person, CurrencyRupee, Inventory2, Assessment, MailOutline, Feedback, ChatBubbleOutline, ManageSearch, HourglassDisabled, ReportGmailerrorred  } from '@mui/icons-material';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
             <h3 className="sidebarTitle">Dashboard</h3>
             <ul className="sidebarList">
               <Link to="/" className="link">
               <li className="sidebarListItem active">
               <LineStyle className="sidebarIcon"/> Home
            </li>
               </Link>

               
                 <li className="sidebarListItem">
                 <Timeline className="sidebarIcon"/> Analytics
                 </li>
               
               
               
                 <li className="sidebarListItem">
                 <TrendingUp className="sidebarIcon"/> Sales
                 </li>
               
               
             </ul>
          </div>

     
        
          <div className="sidebarMenu">
             <h3 className="sidebarTitle">Quick Menu</h3>
             <ul className="sidebarList">
             <Link to="/users" className="link">
                <li className="sidebarListItem">
                <Person className="sidebarIcon"/> Users
                 </li> 
             </Link>
              
             <Link to="/products" className="link">
               <li className="sidebarListItem">
               <Inventory2 className="sidebarIcon"/> Products
               </li>
             </Link>
              
               <li className="sidebarListItem">
                  <CurrencyRupee className="sidebarIcon"/> Transaction
               </li>
               <li className="sidebarListItem">
                  <Assessment className="sidebarIcon"/> Progression
               </li>
             </ul>
          </div>

          

         <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notification</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
             <MailOutline className="sidebarIcon"/> Mail
          </li>
          <li className="sidebarListItem">
             <Feedback className="sidebarIcon"/> Feedback
          </li>
          <li className="sidebarListItem">
             <ChatBubbleOutline className="sidebarIcon"/> Messages
          </li>
        </ul>
     </div>

     
     
     <div className="sidebarMenu">
     <h3 className="sidebarTitle">Others</h3>
     <ul className="sidebarList">
       <li className="sidebarListItem">
          <ManageSearch className="sidebarIcon"/> Manage
       </li>
       <li className="sidebarListItem">
          <HourglassDisabled className="sidebarIcon"/> Nothing
       </li>
       <li className="sidebarListItem">
          <ReportGmailerrorred className="sidebarIcon"/> Reports
       </li>
     </ul>
  </div>

        </div>

    </div>
  )
}

export default Sidebar