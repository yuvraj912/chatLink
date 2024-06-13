const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/AsyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const {chats} = require('../data/data.js');

const display = asyncHandler(async(req, res) =>{
    res.send("Main page");
})

const test = asyncHandler(async(req, res)=>{
    res.send(chats);
})


module.exports = test;