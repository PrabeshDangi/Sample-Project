const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.DB_URI;

const dbConnection = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"));
  // .catch((err) => console.log("Database connection failed : ", err.message));
  // catch removed after adding unhandled promise rejection function in index.js
};

module.exports = dbConnection;
