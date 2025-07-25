// import userModel from "../models/userModel.js";
const userModel = require("../models/userModel.js")
// import validator from "validator";
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailNormalized = email.trim().toLowerCase();

    const exists = await userModel.findOne({ email: emailNormalized });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(emailNormalized)) {
      return res.json({ success: false, message: "Please enter a valid email." });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email: emailNormalized,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//route for admin login
const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email + password , process.env.JWT_SECRET)
      res.json({success: true, token})
    }else{
      res.json({success: false, message : "Invalid credentials"})
    }
  } catch (error) {
    console.log(error)
        res.json({success: false, message: error.message})
  }
};


module.exports = {loginUser, registerUser, adminLogin};
