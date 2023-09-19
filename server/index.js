const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const dbConnection = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

dotenv.config({ path: "config/config.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection!");

  process.exit(1);
});

userRoutes(app);
productRoutes(app);

dbConnection();

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection!");

  server.close(() => process.exit(1));
});
