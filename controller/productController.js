import ProductModel from "../models/ProductModel.js";
import fs from 'fs';
import slugify from "slugify";
export const createProductController=async(req,res)=>{
    try{
        const {name,slug,description,original_price,selling_price,discount,category,quantity,shipping}=req.fields
        const {photo}=req.files; 
        //validation
        switch(true){
            case !name:
                return res.status(500).send({error:'name is required'})
            case !description:
                return res.status(500).send({error:'description is required'})
            case !original_price:
                return res.status(500).send({error:'original price is required'})
            case !selling_price:
                return res.status(500).send({error:'selling price is required'})
            case !discount:
                return res.status(500).send({error:'discount is required'})
            case !category:
                return res.status(500).send({error:'category is required'})
            case !quantity:
                return res.status(500).send({error:'qunatity is required'})
            case photo && photo.size>1000000:
                return res.status(500).send({error:'photo is required'})
           
        } 
      const product= new ProductModel({...req.fields,slug:slugify(name)})
      if(photo){
        product.photo.data=fs.readFileSync(photo.path);
        product.photo.contentType=photo.type;
        console.log(product); // Check if product is fetched correctly
        console.log(product.photo.contentType); // Check the contentType value
      }
      await product.save()
      res.status(201).send({
        success:true,
        message:"product added successfully",
        product,
      });
    }
    catch(error){
     console.log(error);
     res.status(500).send({
        success:false,
        error,
        message:"error in creating product"
     })
    }
}
//get all products
export const getProductController=async(req,res)=>{
 try{
    const products= await ProductModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1});
    res.status(200).send({
        success:true,
        counTotal:products.length,
        message:"all products",
        products,
        
    });
    
 }
 catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in getting products",
        error,
    })

 }
}

//get single product
export const getSingleProductContoller=async(req,res)=>{
    try{
        const product =await ProductModel.findOne({slug:req.params.slug}).select("-photo").populate('category');
        res.status(200).send({
            success:true,
            message:"fetched single product successfully",
            product,
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in fetching single product",
            error,
        })
    }
}

//get product photo

// export const productPhotoController=async(req,res)=>{
//     try{
//         const product=await ProductModel.findById(req.params.pid).select("photo");
//         if(product.photo.data){
//             res.set("content-type",product.photo.contentType);
//             return res.status(200).send(product.photo.data);
//         }
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:"error in fetching product photo",
//             error,
//         })

//     }
// }

//try
export const productPhotoController = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.pid).select("photo");
        
        if (!product || !product.photo) {
            return res.status(404).send({ success: false, message: "Product photo not found" });
        }

        // Set content type to the appropriate value
        res.set("Content-Type", product.photo.contentType);

        // Send the photo data
        return res.status(200).send(product.photo.data);
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in fetching product photo",
            error: error.message // It's better to send only error message to the client
        });
    }
};
