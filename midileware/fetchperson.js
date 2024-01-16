var jwt = require("jsonwebtoken");
// const statusText = require("../utilities/status-text.js");
const JWT_SECRET = "Harryisagoodb$oy";

// My models

const user_db = require("../Models/user.js");


const isUser = async(req,res,next)=>{
   
    
    try{
        const d = req.body.fname
        if(!d){
            return res.json({success:"false",msg: "fname is required"})
        }
        let user = await user_db.findOne({ username: req.body.username });
        if (user) {
            return res.send('That user already exisits!');
        } 
    }catch(e){
        res.json(e)
    }

    next();
}
// let = jwt_screte = "12345"
const checkuser = async(req,res,next)=>{
   
    
    try{
        const d = req.body.username
        if(!d){
            return res.json({success:"false",msg: "username is required"})
        }
        let user = await user_db.findOne({ username: req.body.username });
        if (user) {
           if( req.body.password===user.password){
            // return ;
           }
           else{
            return res.json({status : false, msg:" password is not right"})
           }
        } else{
            return res.json({status : false, msg:"this is not register user"})
        }
    }catch(e){
        res.json(e)
    }

    next();
}

const fetchperson=(req,res,next)=>{
    const token = req.header("auth-token")
    if(!token){
        res.json({status:false,err:'you mst be logedin'})
      }
      try{
        const data = jwt.verify(token,JWT_SECRET)
        
        req.mongoid = data.jwt_data
        
        next();
      }catch{
          res.send({status:false,err:'err,wrong token'})
      }
}


module.exports = {
    isUser,checkuser,fetchperson
}