const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/AsyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const { chats } = require('../data/data.js');

//   working on "/" route
const display = asyncHandler(async(req, res) =>{
    res.send("Main page");
})

//     working on "/test" route 
const test = asyncHandler(async(req, res)=>{
    res.send(chats);
})

module.exports = display;
module.exports = test;