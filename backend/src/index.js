// require("dotenv").config();
require("dotenv").config();
const mongo = require("./config/mongodb.connection")
const { Router } = require("express");
const exp = require("express")
const app = exp()
const router = Router();


mongo();


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`port number is ${port}`)
})      
