// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db_config.js");
const beveragesRoutes = require("./routes/beverages.js");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// MongoDB Connection
connectDB();

// Home Route
app.get("/", (req, res) => {
  res.send("Hi from the backend");
});

// Routes
app.use("/api", beveragesRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
