import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController=async (req,res)=>{
    try{
     const {name,email,password,phone,address}=req.body
     //validations
     if(!name){
        return res.send({error:'NAME IS REQUIRED'})
     }
     if(!password){
        return res.send({error:'PASSWORD IS REQUIRED'})
     }
     if(!phone){
        return res.send({error:'PHONE NUMBER IS REQUIRED'})
     }
     if(!address){
        return res.send({error:'ADDRESS IS REQUIRED'})
     }
     //CHECK user
     const existingUser=await userModel.findOne({email})
     //existing user
     if(existingUser){
        return res.status(200).send({
            success:true,
            message:'already registered with this email id, please log in'
        })
     }
     //register user
     const hashedPassword=await hashPassword(password)
    //save
    const user= await new userModel({name,email,password:hashedPassword,phone,address}).save()
    res.status(201).send({
        success:true,
        message:'registred succesfully',
        user
    })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }
};
export const loginController= async(req,res)=>{
    try{
    const {email,password}= req.body;
    //validataion
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'invalid email or password'
        });
    }
    //check user
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(404).send({
            success:false,
            message:'email is not registered',
        })
    }
    const match =await comparePassword(password,user.password);
    if(!match){
        return res.status(200).send({
            success:false,
            message:"invalid password",
        })
    }
    //tokrn
    const token= await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });
    res.status(200).send({
        success:true,
        message:"login successfully",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
        },
        token,
    });
    }
    catch(error){
      console.log(error);
      res.status(500).send({
        success:false,
        message:"error in login",
        error
      })
    }

}
//testcontroler
export const testController= (req,res)=>{
res.send("protectd route");
}