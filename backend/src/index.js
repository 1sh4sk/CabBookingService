// require("dotenv").config();
require("dotenv").config();
const mongo = require("./config/mongodb.connection")

const exp = require("express")
const app = exp()
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user.routes")
const captainRouter = require("./routes/captain.routes")
const mapsRouter =require("./routes/maps.route")

mongo();
app.use(exp.json())
app.use(cookieParser());
app.use(exp.urlencoded({ extended: true }));    // it allow the nested object in input

app.use("/user",userRouter)
app.use("/captain",captainRouter)
app.use("/maps",mapsRouter)

const port = process.env.PORT || 5000;
 
app.listen(port, () => {
    console.log(`port number is ${port}`)
})      

