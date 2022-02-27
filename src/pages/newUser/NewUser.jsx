import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form className="newUserForm">
      <div className="newUserItem">
         <label>Full Name</label>
         <input type="text" placeholder="ex: Anupam Mohanty"/>
      </div>
      <div className="newUserItem">
         <label>Shop Name</label>
         <input type="text" placeholder="ex: something"/>
      </div>
      <div className="newUserItem">
         <label>Email</label>
         <input type="email" placeholder="ex: abc@gmail.com"/>
      </div>
      <div className="newUserItem">
         <label>Phone Number</label>
         <input type="number" placeholder="ex: +91-1234567890"/>
      </div>
      <div className="newUserItem">
         <label>Id Proof Number</label>
         <input type="text" placeholder="ex: 123456789147"/>
      </div>

      <div className="newUserItem">
        <label>Upload Photo</label>
        <input type="file" />
      </div>
      
    </form>
    <button className="newUserButton">Create</button>
    </div>
  )
}
