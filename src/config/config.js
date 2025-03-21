require("dotenv").config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  POSTGREDB_URI: process.env.POSTGREDB_URI,
};
