const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const  ObjectID = require('mongodb').ObjectId;

const noteSchema = mongoose.Schema(
  

  {
  
      text:{
       type: String,
      },

      userId:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true,
      }
  },
{
    timestamps: true,
}
);




const Notes = mongoose.model('Notes', noteSchema);

module.exports = Notes;
