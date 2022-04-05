const Notes = require('../models/notes.model.js');
const catchAsync = require('../utils/catchAsync');
const { objectId } = require('../validations/custom.validation.js');
var ObjectId = require('mongodb').ObjectID;

const insertNote = catchAsync(async (req, res) => {
    const note = await Notes.create({text: req.body.text});
    res.send(note);
 });
 
 const getNote = catchAsync(async (req, res) => {
   const gnote = await Notes.find();
   res.status("200").send(gnote);
 });
 
 const deleteNote = catchAsync(async (req, res) => {
   const dnote = await Notes.findOneAndDelete({_id: ObjectId(req.body._id)});
   res.send(dnote);
 });
 module.exports = {
    insertNote,
    getNote,
    deleteNote, 
  };
  