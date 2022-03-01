import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
      };


      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 270, renderCell: (okay) =>{
          return(
            <div className="userListItem">
                <img className="userListImg" src={okay.row.img} alt=""/>
                {okay.row.name}
            </div>
          )
        } },
        { field: 'Price From', headerName: 'Price Starting From', width: 230 },
        {
          field: 'barNum',
          headerName: 'Bar Num',
          type: 'text',
          width: 190,
        },
        {
            field: "status",
            header:"Stock",
            width: 160
        },
        {
          field: "action",
          headerName: "action",
          width: 150,
          renderCell: (okay) => {
            return (
             <>
             {/*<Link to={"/product/"+okay.row.id}>*/}
                <button className="productListEdit">Edit</button>
             {/*</Link>*/}
              
              <DeleteOutline className="prductListDelete" onClick={() => {handleDelete(okay.row.id)}} style={{color: "red"}}/>
             </> 
            );
          },
        },
      ];

      

  return (
    <div className="productList">
    <div className="productTitleContainer">
           <h1 className="productTitle">Product</h1> 
        <Link to="/newproduct">
           <button className="productAddButton">Create</button>
        </Link> 
     </div>

      <DataGrid
      rows={data} disableSelectionOnClick columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      />
    </div>
  )
}
