const mongoose = require("mongoose");

const qunatScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const verbalScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const oopScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const dsaScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const dbmsScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const cnScheema = new mongoose.Schema({
  question: String,
  options: {
    type: [String],
    required: true,
  },
  correctOption: String,
  point: Number,
});

const quantQuestion = mongoose.model("quanttitative_aptitude", qunatScheema);
const verbalQuestion = mongoose.model("verbal", verbalScheema);
const oopQuestion = mongoose.model("oop", oopScheema);
const dsaQuestion = mongoose.model("dsa", dsaScheema);
const dbmsQuestion = mongoose.model("dbms", dbmsScheema);
const cnQuestion = mongoose.model("computer_networks", cnScheema);

module.exports = {
  quantQuestion,
  verbalQuestion,
  oopQuestion,
  dsaQuestion,
  dbmsQuestion,
  cnQuestion,
};
