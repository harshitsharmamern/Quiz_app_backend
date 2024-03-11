const mongoose = require("mongoose");
// require("dotenv").config();
const    link="mongodb+srv://sharmaharshit769:portfolio@cluster0.ofeae87.mongodb.net/Quiz_App"
// const link="mongodb+srv://sharmaharshit769:portfolio@cluster0.ofeae87.mongodb.net/social_media"

// const link = "mongodb://localhost:27017/my_yuva"

const connectToMongo = () => {
  mongoose
    .connect(link)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Some error occured in database connection", err);
    });
};

module.exports = connectToMongo;
