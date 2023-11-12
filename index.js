const express = require("express")
const cors = require("cors");
const app = express(); 
app.use(cors());

//basically parse incoming Request Object as a JSON Object
app.use(express.json());
app.use(express.urlencoded());

// import  "./database/db.js";
// connectdb()

const database_connection = require("./database/db.js")
database_connection();

const routefunc = require("./routes/route")
app.use("/",routefunc);
app.get("/",(req,res)=>{
    res.send("Welcome on Users table page.....,hello...");
})

const PORT = process.env.Port || 3051;
app.listen(PORT, ()=> console.log(`server is listening at port ${PORT}`) )