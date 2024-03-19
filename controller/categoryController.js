import slugify from "slugify"
import CategoryModel from "../models/CategoryModel.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"

export const createCategoryController=async(req,res)=>{
  try{
      const {name}=req.body
      if(!name){
        return res.status(401).send({message:'name is requires'})
      }
      const existingCategory=await CategoryModel.findOne({name})
      if(existingCategory){
        return res.status(200).send({
            success:true,
            message:'category already exists'
        })

      }
      const category =await new CategoryModel({name,slug:slugify(name)}).save()
       res.status(201).send({
         success:true,
         message:'new category created',
         category,
       })
  }
  catch(error){
   console.log(error)
   res.status(500).send({
    success:false,
    error,
    message:'error in category'
   })
  }
}


//update category
export const updateCategoryController=async(req,res)=>{
    try{
        const {name}=req.body;
        const {id}=req.params;
      const category=await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
       res.status(200).send({
        success:true,
        message:"category updated successfully",
        category,
       });
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error while updating category'
        });
    }
};
