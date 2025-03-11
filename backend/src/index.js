// require("dotenv").config();
require("dotenv").config();
const mongo = require("./config/mongodb.connection")

const exp = require("express")
const app = exp()
const cookieParser = require("cookie-parser");
const router = require("./routes/user.routes")


mongo();
app.use(exp.json())
app.use(cookieParser());
app.use(exp.urlencoded({ extended: true }));    // it allow the nested object in input

app.use("/user",router)
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`port number is ${port}`)
})      
