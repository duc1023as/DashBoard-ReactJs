import React from 'react'
import "./product.css"
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Edit Product</h1>
            <Link to={"/newProduct"}>
                <button className="productTitleButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart title={"Sales Performance"} data={productData} dataKey={"Sales"}></Chart>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="Air pods" 
                    className="productTopImg" />
                    <span className="productName">Ari pods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInforValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInforValue">523</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInforValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInforValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" className="productInput" placeholder='Airpods' />
                    <label>In stock</label>
                    <select name="stock" id="stock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productFormRightTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="Apple airpods" 
                        className="productFormRightTopImg" />
                        <label htmlFor="idUpdate"><Publish></Publish></label>
                        <input type="file" className='productInput' id='idUpdate' style={{display : 'none'}}/>
                    </div>
                    <div className="productFormRightBottom">
                        <button className="productFormButton">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
