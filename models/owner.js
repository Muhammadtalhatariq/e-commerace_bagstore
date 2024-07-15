const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  username: {
    type : String,
    trim : true,
    minlength : 3
  },
  name: String,
  email: String,
products : {
    type :String,
    default : [],
},
picture : String,
gstin : String,
});

module.exports = mongoose.model("owner", ownerSchema);