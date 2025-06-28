const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected....");
  });

  return mongoose.connect(`${process.env.MONGODB_URI}/commerce`)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    });
};

module.exports = connectDb;