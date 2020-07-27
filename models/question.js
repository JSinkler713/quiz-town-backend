const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  prompt: { type: String, required: true, unique: true }
  answers: [{
      text: String,
      correct: Boolean
    }],
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
