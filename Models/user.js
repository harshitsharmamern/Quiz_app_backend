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
  
});
const userregis = mongoose.model("old_user", database1);

module.exports = userregis;
