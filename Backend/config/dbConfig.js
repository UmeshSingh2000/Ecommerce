const mongoose = require('mongoose')
require('dotenv').config();
const dbConnect = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/boat`);
        console.log("Connection established");
    }
    catch(err){
        console.log(err)
    }
}
module.exports = dbConnect;