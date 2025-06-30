// import express from "express"
const express = require("express")
const { listProduct,addProduct, singleProduct, removeProduct } = require("../controllers/productController.js");
const upload = require("../middleware/multer.js");
const { adminAuth } = require("../middleware/adminAuth.js");
// import { listProduct,addProduct, singleProduct, removeProduct } from "../controllers/productController.js"
// import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, upload.fields([{name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}]) ,addProduct);
productRouter.post("/remove", adminAuth,removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);


module.exports =  productRouter;