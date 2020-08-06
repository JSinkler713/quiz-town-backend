const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const QuestionSchema = new Schema({
  prompt: { type: String, required: true },
  answers: [{
      text: String,
      correct: Boolean,
    }],
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  }
})

// use uniqueValidator
QuestionSchema.plugin(uniqueValidator);

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
