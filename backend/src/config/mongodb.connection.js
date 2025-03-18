const mongoo = require("mongoose");

const mongo =()=>{
try {
    mongoo.connect(process.env.MONGO_URL).then(()=>{
        console.log("DB Connected")
    })
} catch (error) {
    console.log("Not Connectetd")
}
   
} 

module.exports = mongo