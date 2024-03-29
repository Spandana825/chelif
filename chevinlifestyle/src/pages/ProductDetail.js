import React from 'react'
import { useState,useEffect } from 'react'
import Layout from '../components/Layout/Layout'

import axios from 'axios'
import { json, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params=useParams()
    const [product,setProduct]=useState({})
    //inistaldetails
    useEffect(()=>{
        if(params?.slug)getProduct()
    },[params?.slug])
    //getprodyct
    const getProduct=async()=>{
        try{
         const {data}=await axios.get(`/api/v1/product/get-product/${params.slug}`)
         setProduct(data?.product)
        }
        catch(error){
            console.log(error)
        }
        
    }
  return (
    <Layout>
        
       
        <div className="row container mt-2">
        <div className="col-md-6">
            <img 
            src={`/api/v1/product/get-product-photo/${product._id}`}
            className='card-img-top'
            alt="mage"
            height="600"
            
            />
        </div>
        <div className="col-md-6 ">
            <h1 className='text-center '>Product Details</h1>
            <h2>{product.name}</h2>
            <h5>{product?.category?.name}</h5>
            <h4>
            <strike className="strike" >₹{product.original_price}</strike> <span className='price'>₹{product.selling_price}</span> <span className='discount'>({product.discount}% OFF)</span>
                        </h4>
            <h5>{product.description}</h5>
            <a href="#" className="btn btn-primary addtocart">
                          Add to cart
                        </a>
            
            
        </div>
        </div>
    </Layout>
  )
}

export default ProductDetail
