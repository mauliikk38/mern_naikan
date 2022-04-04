const Notes = require('../models/notes.model.js');
const catchAsync = require('../utils/catchAsync');
const ObjectID = require('mongodb').ObjectID;

const insertNote = catchAsync(async (req, res) => {
    const note = await Notes.create({text: req.body.text});
    res.send(note);
 });
 
 const getNote = catchAsync(async (req, res) => {
   const gnote = await Notes.find();
   res.send(gnote);
 });
 
 const deleteNote = catchAsync(async (req, res) => {
   const dnote = await Notes.deleteOne({text: req.body.text});
   res.send(dnote);
 });
//_id: mongoose.ObjectId(req.body._id)
 module.exports = {
    insertNote,
    getNote,
    deleteNote, 
  
  };
  