const express = require("express");
const cors = require("cors");
const connectDb = require("./config/mongodb");
const { connectCloudinary } = require("./config/cloudinary");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize connections
connectDb().catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

try {
  connectCloudinary();
} catch (err) {
  console.error("Cloudinary connection error:", err);
  process.exit(1);
}

// Middlewares
app.use(express.json());
app.use(cors());


//api endpoints
app.use("/api/user",userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter);


app.get("/", (req, res) => {
  res.send("You are in home page");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});