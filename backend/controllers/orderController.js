const orderModel = require("../models/orderModel.js");
const userModel = require("../models/userModel");


// placing orders using cash on delivery method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData)
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {}})
    res.json({success: true, message : "Order Placed"})

  } catch (error) {
     console.log(error)
     res.json({success: false, message: error.message})
     
  }
};

/// ----------------- by stripe--------------
const placeOrderStripe = async (req, res) => {};

//----------------------------- by razorpay---------------------------
const placeOrderRazorpay = async (req, res) => {};

// all orders data for admin panel
const allOrders = async (req, res) => {};

//user order data for frontend
const userOrders = async (req, res) => {};

// update order status from Admin Panel
const updateStatus = async (req, res) => {};

module.exports = {
  allOrders,
  userOrders,
  updateStatus,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
};
