// import mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// database connection function
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfull");
    })
    .catch((err) => {
      console.log("Issur in DB connection");
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
