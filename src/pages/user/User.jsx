import { FileUpload, Fingerprint,  MailOutline, Navigation,  PhoneAndroid, Storefront } from "@mui/icons-material"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
            <button className="userAddButton">Create</button>
        </Link> 
      </div>
      <div className="userContainer">
        <div className="userShow">
           <div className="userShowTop">
             <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" className="userShowImg" />
             <div className="userShowTopTitle">
               <span className="userShowUsername">Anupam Mohanty</span>
               <span className="userShowUserTitle">Some Shop</span>
             </div>
           </div>
           <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <Storefront className="userShowIcon"/>
                <span className="userShowInfoTitle">Pujarini Store</span> 
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+91-1234566</span> 
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">ann@gmail.com</span> 
              </div>
              <div className="userShowInfo">
                <Navigation className="userShowIcon"/>
                <span className="userShowInfoTitle">Maha,Cuttack,Odisha</span> 
              </div>
              <div className="userShowInfo">
                <Fingerprint className="userShowIcon"/>
                <span className="userShowInfoTitle">1234566788</span> 
              </div>
           </div>
        </div>
        <div className="userUpdate">
         
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
              <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Anupam Mohanty" className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
              <label>Store Name</label>
              <input type="text" placeholder="Pujaraini Shop" className="userUpdateInput"/>
            </div>
            <div className="userUpdateItem">
            <label>Email</label>
            <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
          </div>
          <div className="userUpdateItem">
          <label>Phone Number</label>
          <input type="number" placeholder="+91-12344566" className="userUpdateInput"/>
        </div>
        <div className="userUpdateItem">
        <label>Id Proof Number</label>
        <input type="text" placeholder="123456671597" className="userUpdateInput"/>
     </div>
      <div className="userUpdateItem">
      <label>Address</label>
      <input type="text" placeholder="Maha,Cuttack,Odisha" className="userUpdateInput"/>
    </div>
 </div>

           <div className="userUpdateRight">
             <div className="userUpdateUpload">
               <img className="userUpdateImg" src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />    
                <label htmlFor="file"><FileUpload className="userUpdateIcon"/> </label>
               <input type="file" id="file" style={{display: "none"}}></input>
               </div>
               <button className="userUpdateButton">Update</button>
           </div>   
          </form>
        </div>
      </div>
    </div>
  )
}
