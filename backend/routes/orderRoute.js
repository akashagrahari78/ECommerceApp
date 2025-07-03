const express = require("express")
const {allOrders,userOrders, updateStatus, placeOrder, placeOrderRazorpay, placeOrderStripe} = require("../controllers/orderController.js")
const {adminAuth} = require("../middleware/adminAuth.js")
const {authUser} = require("../middleware/auth.js")
const orderRouter = express.Router();

// admin routes
orderRouter.post("/list",adminAuth ,allOrders)
orderRouter.post("/status",adminAuth ,updateStatus)

// payment features
orderRouter.post("/place",authUser ,placeOrder);
orderRouter.post("/stripe",authUser ,placeOrderStripe);
orderRouter.post("/razorpay",authUser ,placeOrderRazorpay);

// user routes
orderRouter.post("/userorders", authUser, userOrders)

module.exports = orderRouter

