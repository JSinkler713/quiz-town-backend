const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: { type: String, required: true, unique: true },
  questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
})

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
