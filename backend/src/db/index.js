const mongoose = require('mongoose');

// Importing the constant with CommonJS
const { DB_NAME } = require('../constants.js');



const connectDB = async ()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MONGODB Connected !! DB HOST: ${connectionInstance.connection.host}`); 
    }
    catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

module.exports = connectDB;