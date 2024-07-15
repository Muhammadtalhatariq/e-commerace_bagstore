const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/scatch");

const userSchema = mongoose.Schema({
  username: {
    type : String,
    trim : true,
    minlength : 3
  },
  name: String,
  email: String,
cart : {
    type :String,
    default : [],
},
isadmin : Boolean,
orders : {
    type :String,
    default : [],
},
contact :Number,
picture : String,


 
});

module.exports = mongoose.model("user", userSchema);