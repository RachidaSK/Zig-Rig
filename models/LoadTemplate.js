const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loadTemplateSchema = new Schema({

    name: {type: String, required: true},
    phase: {type: String, required: true},
    current: {type: Number, required: true},
    type: {type: String, required: true},

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      } 
			 
});

const LoadTemplate = mongoose.model("LoadTemplate", loadTemplateSchema);
  
module.exports = LoadTemplate;
