const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const noteSchema = mongoose.Schema(
  

  {
      text:{
       type: String,
      }
    
  },
{
    timestamps: true,
}
);




const Notes = mongoose.model('Notes', noteSchema);

module.exports = Notes;
