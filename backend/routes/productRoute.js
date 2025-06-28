// import express from "express"
const express = require("express")
const { listProduct,addProduct, singleProduct, removeProduct } = require("../controllers/productController.js")
// import { listProduct,addProduct, singleProduct, removeProduct } from "../controllers/productController.js"
// import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProduct);


module.exports =  productRouter;