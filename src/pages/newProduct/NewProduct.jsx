import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className="newProduct">
    <h1 className="addProductTitle">New Product</h1>
    <form className="addProductForm">
      <div className="addProductItem">
        <label>Image</label>
        <input type="file" id="file" />
      </div>
      <div className="addProductItem">
        <label>Name</label>
        <input type="text" placeholder="Something" />
      </div>
      <div className="addProductItem">
        <label>Bar Number</label>
        <input type="text" placeholder="123" />
      </div>
      <div className="addProductItem">
        <label>Stock</label>
        <select name="active" id="active">
          <option value="yes">Available</option>
          <option value="no">Not Available</option>
        </select>
      </div>
      <button className="addProductButton">Create</button>
    </form>
    </div>
  )
}
