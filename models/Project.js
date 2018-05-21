const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: {type: String, required: true},

    generator: {
      capacity: {
        type: Number
      }
    },

    loads: [
      {
        name: {
          type: String,
          required: true
        },
        current: {
          type: Number,
          required: true
        },
        phase: {
          type: String,
          required: true
        },
        connections: [{
          type: String
        }],
        type: {
          type: String,
          required: true
        }

      }
    ],
		/*
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    } 
		*/

});

const Project = mongoose.model("Project", projectSchema);
  
module.exports = Project;
