const mongoose = require("mongoose");
const DBconnect = async () => {
  try {
    let result =await mongoose.connect(process.env.DB_URI);
    console.log("data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DBconnect;
