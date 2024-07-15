const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const db = require("./config/moongose-connection");
const ownerRouter = require("./router/ownerRouter")
const userRouter = require("./router/userRouter")
const productRouter = require("./router/productRouter")

// cookies middleware 
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
 
// router 
app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
