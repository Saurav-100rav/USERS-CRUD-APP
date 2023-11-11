const mongoose = require("mongoose");
require('dotenv').config(); 

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const MONGO_URL =`mongodb+srv://${dbUser}:${dbPassword}@cluster-freecodecamp.yticvao.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connectdb = async()=>{
    try {
        await mongoose.connect(MONGO_URL,  { useNewUrlParser:true, useUnifiedTopology:true, });
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Error while connecting database...",error);
    }
    
}

module.exports = connectdb; 

// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension. 
// import connectdb from "./database/db";
// ^^^^^^

// SyntaxError: Cannot use import statement outside a module


//  export default connectdb