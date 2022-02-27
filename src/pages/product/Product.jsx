import "./product.css"
import { Link } from "react-router-dom"
import Charts from "../../components/charts/Charts"

export default function Product() {
  return (
  
       <div className="product">
         <div className="productTitleContainer">
           <h1 className="productTitle">Product</h1> 
        <Link to="/newproduct">
           <button className="productAddButton">Create</button>
        </Link> 
         </div>
        <div className="productTop">
            <div className="prodcutTopLeft">
              <Charts />
            </div>
            
            <div className="producTopRight"></div>
        </div>
          <div className="productBottom"></div>
       </div>
    
  )
}
