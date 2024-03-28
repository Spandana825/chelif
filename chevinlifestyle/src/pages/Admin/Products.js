import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Products = () => {
  const [products,setProducts]=useState([]);
  //get all products
  const getAllProducts=async()=>{
    try{
     const {data}= await axios.get("/api/v1/product/get-products");
     setProducts(data.products);
  
    }
    catch(error){
      console.log(error);
      toast.error("something went wrong in getting products")
    }
  };
  //lifecycle
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <Layout>
       <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <h1> All Products</h1>
                    <div className='d-flex flex-wrap'>
                    {products?.map(p=>(
                      <Link  className="product-link"to={`/dashboard/admin/product/${p.slug}`}>
                      <div className="card m-2" style={{ width: "16rem" }} key={p._id}> 
                      <img src={`/api/v1/product/get-product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">
                        <strike className="strike">₹{p.original_price}</strike> <span className='price'>₹{p.selling_price}</span> <span className='discount'>({p.discount}% OFF)</span>
                        </p>
                        <a href="#" className="btn btn-primary addtocart">
                          Manage
                        </a>
                      </div>
                    </div>
                    </Link>
                    ))}
                    </div>
                   
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Products
