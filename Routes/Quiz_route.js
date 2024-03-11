const express = require('express');
const router = express.Router();
const user_db = require('../Models/user')
// Define routes
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";

const {isUser,checkuser,fetchperson} = require("../midileware/fetchperson");
const Quiz_modle = require('../Models/Quiz');

router.get("/All_quiz",async(req,res)=>{
  // console.log("allquiz call");
        const data = await Quiz_modle.find()

        res.json({Quiz_data : data})
    })

    router.post('/add-quiz', async (req, res) => {
        try {
          const newQuiz = new Quiz_modle(req.body); // Assuming the request body contains the quiz data
          const savedQuiz = await newQuiz.save();
          res.status(201).json(savedQuiz);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });


////////////////////////////////
router.get('/quiz/:quizid/questions', async (req, res) => {
  try {
    // console.log("yes");
      const quizId = req.params.quizid;
      // const onequizdata = await Quiz_modle.findById(quizId)
      const questions = await Quiz_modle.findById(quizId); // Assuming 'questions' is a field in your Quiz model
      res.json({status:true , questions });
  } catch (error) {
      console.error('Error fetching quiz questions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


/////////////////////////////////Admin

router.delete("/delete/quiz/:quizid",async(req,res)=>{
  
  try {
    const quizId = req.params.quizid;
    const deletedQuiz = await Quiz_modle.findByIdAndDelete(quizId);
    // console.log(quizId);
    if (!deletedQuiz) {
          return res.status(404).json({ msg: "Quiz not found" });
      }
      res.json({ok:"true",msg:"delete ",quizId})
} catch (error) {
    console.error('Error deleting quiz:', error);
    res.status(500).json({ msg: "Internal Server Error" });
}
})

router.get("/edit/quiz/:quizid",async(req,res)=>{
  const quizId = req.params.quizid;
  // console.log(quizId);
  const data = await Quiz_modle.findById(quizId)
  return res.json({data})
})

module.exports = router;