const mongoose = require("mongoose");

const database1 = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
   
  
});
const userregis = mongoose.model("Todo", database1);

module.exports = userregis;
