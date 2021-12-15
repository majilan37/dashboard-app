import React from 'react'
import { Link } from 'react-router-dom'
import {productData} from '../../../dummyData'
import Chart from '../../chart/Chart'
import '../../../styles/pages/Product.css'
import { Publish } from '@material-ui/icons'

const Product = () => {
    return (
        <div className='product' >
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
                <div className="productTop">
                    <div className="productTopLeft">
                        <Chart data={productData} title={'Product Analytics'} grid dataKey={'Sales'} />
                    </div>
                    <div className="productTopRight">
                        <div className="productInfoTop">
                            <img className="productInfoImg" src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
                            <span className="productName">Apple Airpods</span>
                        </div>
                        <div className="productInfoBottom">
                            <div className="productInfoItem">
                                <span className="productInfoKey">id: </span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">sales: </span>
                                <span className="productInfoValue">123</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">active: </span>
                                <span className="productInfoValue">yes</span>
                            </div>
                            <div className="productInfoItem">
                                <span className="productInfoKey">in stock: </span>
                                <span className="productInfoValue">no</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Product Name</label>
                            <input type="text" placeholder="Apple AirPod"/>
                            <label>In Stock</label>
                            <select name='inStock' id='inStock' >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label>Active</label>
                            <select name='active' id='active' >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="productUploadImg" />
                                <label for='file'>
                                    <Publish />
                                </label>
                                <input type="file" name="file" id="file" style={{display:'none'}} />
                            </div>
                            <button className="productBtn">Update</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Product
