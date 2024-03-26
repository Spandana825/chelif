import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth'
import { useState,useEffect } from 'react'
import axios from 'axios';
import {Checkbox} from 'antd'

const Shop = () => {
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  //get all categories
  const getAllCategories=async()=>{
    try{
      const {data}=await axios.get("/api/v1/category/get-category");
      if(data?.success){
        setCategories(data?.category);
      }

    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllCategories();
  },[])
  //get all produxts
  const getAllProducts=async()=>{
    try{
      const {data}=await axios.get("/api/v1/product/get-products");
      setProducts(data.products);
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    
    <Layout title={"Dashboard-Shop"}>
     <div className="row mt-3">
      <div className="col-md-3">
        <h4 className="text-center">Filter by Category</h4>
        {categories?.map((c)=>{
          <Checkbox key={c._id} onChange={(e)=>console.log(e)}>
            {c.name}
          </Checkbox>
        })}
      </div>
      <div className="col-md-9">
        <h1 className='text-center'>all products</h1>
        <div className="d-flex flex-wrap">
        {products?.map(p=>(
                    
                      <div className="card m-2" style={{ width: "18rem" }} key={p._id}> 
                      <img src={`/api/v1/product/get-product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">
                        <strike className="strike">₹{p.original_price}</strike> <span className='price'>₹{p.selling_price}</span> <span className='discount'>({p.discount}% OFF)</span>
                        </p>
                        <a href="#" className="btn btn-primary addtocart">
                          Add to cart
                        </a>
                      </div>
                    </div>
                    
                    ))}
        </div>
      </div>
     </div>
    </Layout>
  )
}

export default Shop
