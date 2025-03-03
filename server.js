require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { sequelize } = require("./src/config/postgres");
const mongoConnect = require("./src/config/mongo");
const authRoutes = require("./src/routes/authRoutes");
const responseRoutes = require("./src/routes/responseRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoConnect();

// Connect to PostgreSQL
sequelize
  .authenticate()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.log("PostgreSQL Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/response", responseRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
