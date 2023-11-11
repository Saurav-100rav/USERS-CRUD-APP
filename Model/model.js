const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:Number,
    name:String,
    username:String,
    email:String,
    phone:String,
})

const User = new mongoose.model("User",userSchema);
module.exports = User;