const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quizName: { type: String, required: true },
  topic: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: {
        op1: { type: String, required: true },
        op2: { type: String, required: true },
        op3: { type: String, required: true },
        op4: { type: String, required: true },
      },
      answer: { type: String, required: true },
    },
  ],
  userQuizGiven: [
    {
      userId: { type: String, required: true },
      resultScore: { type: Number, required: true },
      resultData: [{ type: mongoose.Schema.Types.Mixed }],
    },
  ],
});












const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
