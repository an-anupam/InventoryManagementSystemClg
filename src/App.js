import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Charts from "./components/charts/Charts";
import WidgetLg from "./components/widgetLg/WidgetLg";
import Transaction from "./pages/transaction/Transaction";
import Pdf from "./components/intopdf/Pdf"

// import Login from "./pages/login/Login";

// Switch == Routes

export default function App(){

  // const user = false;
    return(
        <Router >
          <Topbar/>
          <div className="container">
            <Sidebar/>
            <Routes>
              <Route exact path="/" element={<Home />} />

         {/* <Route path="/login" element={<Login />  } /> */}
              
              <Route path="/users" element={ <UserList /> } />
               
              <Route path="/user/:userId" element={ <User /> } />

              <Route path="/newUser" element={<NewUser/>} />

              <Route path="/products" element={<ProductList/> } />

              <Route path="/product/:productsId" element={ <Product/> } />

              <Route path="/newproduct" element={<NewProduct/>} />

              <Route path="/transaction" element={<Transaction/>} />
              
               <Route path="/bill" element={<Pdf />  } />
            </Routes>
          </div>
        </Router>
    );
};
