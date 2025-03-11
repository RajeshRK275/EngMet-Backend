const { Sequelize } = require("sequelize");
const { POSTGREDB_URI } = require("./config");

// Initialize Sequelize
const sequelize = new Sequelize(POSTGREDB_URI, {
  dialect: "postgres",
  logging: false,
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected...");
  } catch (err) {
    console.error("PostgreSQL Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectPostgres };
