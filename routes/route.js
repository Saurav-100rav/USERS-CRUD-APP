const express = require ("express");
const router = express.Router();
const User = require("../Model/model")

router.post("/adduser",async(req,res)=>{
    console.log(req.body);

    try {
        // const newUser = new User(req.body)    if req.attributes name matches with model attribute
        const {name,username,email,phone} = req.body;
        const newUser = new User({
            name,
            username,
            email,
            phone
        })
        await newUser.save();
        console.log("Success")
        res.send({msg:"success",user:newUser})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.get("/all",async(req,res)=>{
        try {
          const users =  await User.find({});
          console.log(`${users.length} users available..`)
          res.send(users);
        } catch (error) {
            console.log("error while getting all users information..",error);
            res.status(404).json({message:error})
        }
})

router.get("/getone/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id,"ID")
        const result = await User.findOne({_id:id})
        console.log(result)
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
})

router.put("/edit/:id",async(req,res)=>{
    try {
        const {name,username,phone,email} = req.body
       const newtask = 
        await User.findOneAndUpdate(
            {  _id: (req.params.id)},
            // { $set : 
                // {name:req.body.name}
                {name,username,phone,email}
            // }
            ,
             {new: true,upsert: true}
            )
        // await newtask.save();
        console.log("success",newtask);
        res.send("Success")
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error)
    }
})


router.delete("/delete/:id",async(req,res)=>{
    try {
        // console.log(req.params.id)
        // const user = await User.findOne({_id:req.params.id});
        // console.log(user)
        await User.findOneAndDelete(
            { _id: (req.params.id)},
            //  {new: true,upsert: true}
            )
        console.log("Deleted");
        res.send("Success")
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error)
    }
})
module.exports = router;