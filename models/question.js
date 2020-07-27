const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  prompt: { type: String, required: true, unique: true },
  answers: [{
      text: String,
      correct: Boolean
    }],
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  }
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
