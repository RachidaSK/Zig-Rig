const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },

    password: {
      type: String,
      trim: true,
      required: "Password is Required",
    }
    
  });

  const User = mongoose.model("User", userSchema);
  
  module.exports = User;