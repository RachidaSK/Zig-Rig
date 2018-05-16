const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },

    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      // validate: [
      //   function(input) {
      //     return input.length >= 6;
      //   },
      //   "Password should be longer."
      // ]
    },

    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
      },

    load: {
        type: Schema.Types.ObjectId,
        ref: "load"
      }  
    
  });

  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;