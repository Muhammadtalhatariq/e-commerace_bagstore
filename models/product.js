const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: String,
  discount: {
    type: String,
    default: [],
  },

  bgcolor: String,
  pannelcolor: String,
  textcolor: String,
});

module.exports = mongoose.model("product", productSchema);
