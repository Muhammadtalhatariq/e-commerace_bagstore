const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/scatch")
  .then(function () {
    console.log("connected db");
  })
  .catch(function () {
    console.log(err);
  });

module.exports = mongoose.connection;
