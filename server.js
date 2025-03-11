require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./src/config/mongo");
const { connectPostgres } = require("./src/config/postgres"); // Import Sequelize instance
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectMongoDB();

// Connect to PostgreSQL
connectPostgres();

// Routes
//

app.use("/api", (req, res, next) => {
  console.log("API Route Hit:", req.path);
  next();
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
