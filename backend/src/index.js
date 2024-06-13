require('dotenv').config({path:'../env'});

const app = require('../src/app.js');


const mongoose = require('mongoose');

// Importing the constant with CommonJS
const { DB_NAME } = require('../src/constants.js');

// Inside a CommonJS module
const connectDB = require('../src/db/index.js');


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
})
.catch((err) =>{
    console.log("MONGODB connection failed !!!", err);
})

console.log(`Database name:${DB_NAME}`)