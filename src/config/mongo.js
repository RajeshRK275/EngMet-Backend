const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
