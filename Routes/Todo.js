const express = require('express');
const router = express.Router();
const todo_db = require('../Models/Todo')


router.post('/todopost',async(req,res)=>{
    try{

        const data = await todo_db.create(req.body)
        res.json({status: true,data})
    }catch(err){
        console.log(err);
    }
})


router.get('/todoget',async(req,res)=>{
    const data = await todo_db.find()

    res.json({status: true,data})
})




// const twilio = require('twilio');


const accountSid = 'ACc3195440f44d59ef8f149281a4f975b0'; // Your Twilio Account SID
const twilioNumber = "+916260595903"; // Your Twilio Phone Number

// const client = twilio(accountSid, authToken);
router.get("/getcode",(req,res)=>{
    
    const accountSid = 'ACc3195440f44d59ef8f149281a4f975b0';
    const authToken = 'efe6b492d4b6e6aadec99d1ec0aea593';   // Your Twilio Auth Token
    // const authToken = '[AuthToken]';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
        .create({
            body: 'Your appointment is coming up on July 21 at 3PM',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919827267097'
        })
        .then(message => {
            res.send("send")
            console.log(message.sid)})
            .catch((err)=>{
                console.log(err);
            })
        // .done();
    

})    


// const accountSid = "ACc3195440f44d59ef8f149281a4f975b0";
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const verifySid = process.env.YOUR_VERIFY_SID;
// const client = require("twilio")(accountSid, authToken);

// client.verify.v2
//   .services(verifySid)
//   .verifications.create({ to: "+916260595903", channel: "sms" })
//   .then((verification) => console.log(verification.status))
//   .then(() => {
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     readline.question("Please enter the OTP:", (otpCode) => {
//       client.verify.v2
//         .services(verifySid)
//         .verificationChecks.create({ to: "+916260595903", code: otpCode })
//         .then((verification_check) => console.log(verification_check.status))
//         .then(() => readline.close());
//     });
//   });


module.exports = router;