"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes/task");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./configs/swagger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use("api",routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB✅");
   
  })
  .catch((err) => {
    console.error("❌MongoDB connection error:", err.message);
  });
// GET API
app.get("/", (req, res) => {
  res.send("This is a GET API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
