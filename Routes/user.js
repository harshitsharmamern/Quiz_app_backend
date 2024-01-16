const express = require('express');
const router = express.Router();
const user_db = require('../Models/user')
// Define routes
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";


//////////////midileware
const {isUser,checkuser,fetchperson} = require("../midileware/fetchperson")



router.post('/user/signup',isUser ,async(req, res) => {
   
    try {
        
       
        // const salt = await bcyrpt.getSalt(10);
        // let secpass = await bcyrpt.hash(req.body.password)
        // // const saltpass=  req.body.password

        const data = await user_db.create({
            fname: req.body.fname,
            password: req.body.password,
            username: req.body.username
        });
        // console.log({status : "Success", data});
        res.status(201).json({status : "Success", data});
    } catch (error) {
        console.error(error);
        // Check if the error is a unique constraint violation
        if (error.code === 11000) {
            res.status(400).json("Username must be unique");
        } else {
            res.status(500).json("Some error");
        }
    }
});

router.post('/user/signin',checkuser ,async(req, res) => {
   
    try {
        
        let user = await user_db.findOne({ username: req.body.username });

        const jwt_data ={
            user_data : user
        }
        const auth_token = jwt.sign(jwt_data,JWT_SECRET)

        
        return res.json({status : true, auth_token})
    } catch (error) {
        console.error(error);
        // Check if the error is a unique constraint violation
        if (error.code === 11000) {
            res.status(400).json("Username must be unique");
        } else {
            res.status(500).json("Some error");
        }
    }
});

router.post('user/logout',checkuser,(req,res)=>{
    res.json({sucess: truw})
})

router.get('/user/home',fetchperson,(req,res)=>{
        return res.json({status:true,home_data:req.mongoid})
      
})


router.delete('/delete/all', async (req, res) => {
    try {
        await user_db.deleteMany({});
        // console.log("All data deleted successfully");
        res.status(200).json("All data deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).json("Error deleting data");
    }
});


module.exports = router;