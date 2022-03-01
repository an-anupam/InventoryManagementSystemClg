import "./widgetSm.css"
import { Visibility }from '@mui/icons-material';

export default function WidgetSm() {
  return (
    <div className="widgetSm">

      <span className="widgetSmTitle">New Join Members</span>
       <ul className="widgetSmList">
         <li className="widgetSmListItem">
           <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className="widgetSmImg"/>
           <div className="widgetSmUser">
             <span className="widgetSmUsername">Anupa Mohanty</span>
             <span className="widgetSmUserTitle">Store-1</span>
           
           </div>
           <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
           </button>
         </li>

         <li className="widgetSmListItem">
           <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className="widgetSmImg"/>
           <div className="widgetSmUser">
             <span className="widgetSmUsername">Suraj Roy</span>
             <span className="widgetSmUserTitle">Store-2</span>
           
           </div>
           <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
           </button>
         </li>

         <li className="widgetSmListItem">
           <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className="widgetSmImg"/>
           <div className="widgetSmUser">
             <span className="widgetSmUsername">Nikhil Barik</span>
             <span className="widgetSmUserTitle">Store-1</span>
           
           </div>
           <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
           </button>
         </li>

         <li className="widgetSmListItem">
           <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className="widgetSmImg"/>
           <div className="widgetSmUser">
             <span className="widgetSmUsername">Ahish Panda</span>
             <span className="widgetSmUserTitle">Store-1</span>
           
           </div>
           <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
           </button>
         </li>

         <li className="widgetSmListItem">
           <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" className="widgetSmImg"/>
           <div className="widgetSmUser">
             <span className="widgetSmUsername">Jharna Perua</span>
             <span className="widgetSmUserTitle">Store-5</span>
           
           </div>
           <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
           </button>
         </li>
       </ul>
    </div>
  )
}
