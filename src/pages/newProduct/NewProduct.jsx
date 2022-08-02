import React from 'react'
import "./newproduct.css"

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className="newProductTitle">New Product</h1>
        <form className="newProductForm">
            <label>Image</label>
            <input type="file" className="newProductInput" />
            <label>Name</label>
            <input type="text" placeholder='Apple Airpods' className="newProductInput" />
            <label>Stock</label>
            <input type="text" className="newProductInput" />
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button className="newProductButton">Create</button>
        </form>
    </div>
  )
}
