const mongoose = require("mongoose");
const uri = "mongodb+srv://sat200205:lddtuUHZzZkupqq1@cluster0.vzjpx7a.mongodb.net/wms?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };