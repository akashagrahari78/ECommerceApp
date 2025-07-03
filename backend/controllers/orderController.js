const orderModel = require("../models/orderModel");
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

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });

  } catch (error) {
     console.error(error);
     res.status(500).json({ success: false, message: error.message });
  }
};

// stripe payment
const placeOrderStripe = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented yet" });
};

// razorpay payment
const placeOrderRazorpay = async (req, res) => {
  res.status(501).json({ success: false, message: "Not implemented yet" });
};

// all orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// user order data
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// update order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  allOrders,
  userOrders,
  updateStatus,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
};