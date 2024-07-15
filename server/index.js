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
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "https://beverage-vending-machine-client.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

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
