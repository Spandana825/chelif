import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController, getSingleProductContoller, productPhotoController } from "../controller/productController.js";
import formidable from 'express-formidable'
const router=express.Router()
//routes
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)
//get product
router.get("/get-products",getProductController)
//get single product
router.get("/get-product/:slug",getSingleProductContoller)
//get product photo
router.get("/get-product-photo/:pid",productPhotoController)
export default router