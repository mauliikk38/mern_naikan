const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const Notes = require('../models/notes.model.js');
const { mongoose } = require('../config/config');


const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const insertNote = catchAsync(async (req, res) => {
   const note = await Notes.create({text: req.body.text});
   res.send(note);
});

const getNote = catchAsync(async (req, res) => {
  const gnote = await Notes.find({_id: mongoose.Types.ObjectId(req.body._id)});
  res.send(gnote);
});

const deleteNote = catchAsync(async (req, res) => {
  const dnote = await Notes.findOneandDeleteOne({_id: mongoose.Types.ObjectId(req.body._id)});
  res.send(dnote);
});



module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  insertNote,
  getNote,
  deleteNote, 

};
