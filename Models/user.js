const mongoose = require("mongoose");

const database1 = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
    ,
    quizzesTaken: [
        {
          quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
          score: { type: Number, required: true },
          dateTaken: { type: Date, default: Date.now },
          resultData : {type : []}
        },
      ],
  
});
const userregis = mongoose.model("old_user", database1);

module.exports = userregis;
