const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const QuizSchema = new Schema({
  name: { type: String, required: true, unique: true },
  questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
})
// use uniqueValidator
QuizSchema.plugin(uniqueValidator);

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
