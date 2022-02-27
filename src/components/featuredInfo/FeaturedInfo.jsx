import "./featuredInfo.css";
// import React from 'react'
import {ArrowUpward, ArrowDownward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
           <span className="featuredTitle">Total Products Sold</span>
           <div className="featuredMoneyContainer"> 
            <span className="featuredMoney">2,32,000</span>
            <span className="featuredMoneyRate">+8.7 <ArrowUpward className="featuredIcon Positive"/> </span>
           </div>
           <span className="featuredSub">Compared To Last Month</span>
        </div>

        <div className="featuredItem">
           <span className="featuredTitle">Total Sales Today</span>
           <div className="featuredMoneyContainer">  
           <span className="featuredMoney">₹18,000</span>
            <span className="featuredMoneyRate">-2.7 <ArrowDownward className="featuredIcon Negative"/> </span>
           </div>
           <span className="featuredSub">Compared To Last-Day</span>
        </div>

        <div className="featuredItem">
           <span className="featuredTitle">Total Sales This Month</span>
           <div className="featuredMoneyContainer"> 
           <span className="featuredMoney">₹8,10,000</span>
            <span className="featuredMoneyRate">+1.7 <ArrowUpward className="featuredIcon Positive"/> </span>
           </div>
           <span className="featuredSub">Compared To Last Month</span>
        </div>
    </div>
  )
}
