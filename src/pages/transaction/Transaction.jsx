import "./transaction.css"
import React, {Component} from 'react';
// import 'antd/dist/antd.css';
import PDF from "../../components/intopdf/Pdf"
import { Link } from "react-router-dom";


class Transaction extends Component {


    state = {
        title: '',
        adrs: '',
        pin: '',
        product:'',
        price:'',
        radio:'',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }


    submitPost = (e) => {
        if(!this.state.title || !this.state.price){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
              postSubmitted: true
            });
        }
    }

   render(){
  return (
    
    <div className="transaction">
     
    <h1 className="newUserTitle">Payment Receipt</h1>
    <form className="newUserForm">
      <div className="newUserItem">
         <label>Billing To</label>
         <input onChange={this.onChange('title')} name="title" type="text" placeholder="ex: Store Name"/>
      </div>
      <div className="newUserItem">
         <label>Address</label>
         <input onChange={this.onChange('adrs')} name="adrs" type="text" placeholder="ex: SomeCity"/>
      </div>
      <div className="newUserItem">
         <label>Pin</label>
         <input onChange={this.onChange('pin')} name="pin" type="email" placeholder="ex: 12455"/>
      </div>
      <div className="newUserItem">
         <label>Product</label>
         <input onChange={this.onChange('product')} name="product" type="text" placeholder="ex: Jack and Jones "/>
      </div>
      <div className="newUserItem">
         <label>Price</label>
         <input onChange={this.onChange('price')} name="price" type="text" placeholder="ex: ₹2655"/>
      </div>

      <div className="newUserItem radio">
        <label>Paid</label>
        <input onChange={this.onChange('radio')} name="radio" type="radio" id="yes" value="Yes" checked="unchecked" />
        <label htmlFor="yes">Yes</label>
        
      </div>
      
    </form>
    <Link to='/bill'>
    <button onClick={this.submitPost} className="newUserButton"> Create Bill </button>
    </Link>
    </div> 
        
    
    
    
    
  )
}
}
export default Transaction

