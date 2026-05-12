require("dotenv").config();
const express = require("express");
const { connectDB, sequelize } = require("./config/db");
const userRoutes = require("./routes/routes");
const cors = require("cors");
const app = express();
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// connect DB and start server
const startServer = async () => {
  await connectDB();

  await sequelize.sync(); // creates tables

  app.listen(process.env.PORT, () => {
    console.log("is thi backen drunning");
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

startServer();