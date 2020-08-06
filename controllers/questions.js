const db = require('../models')

const show = (req,res) => {
  db.Question.find( {name: req.params.name }, (err, foundQuestion)=> {
    res.status(200).json({ quiz: foundQuestion });
  })
}
const create = async(req, res) => {
  try {
    const createdQuestion = await db.Question.create(req.body)
    console.log('just created', createdQuestion)
    //find the quiz associated
    const quiz = await db.Quiz.findById(createdQuestion.quiz)
    await quiz.questions.push(createdQuestion)
    await quiz.save()
    res.status(200).json({ question: createdQuestion }) 
  } catch (err) {
    if (err) console.log('error', err);
  }
}
/*
const create = (req, res) => {
  db.Question.create(req.body, (err, createdQuestion) => {
    if (err) console.log('error', err);
    console.log('just created', createdQuestion)
    res.status(200).json({ question: createdQuestion })
  });
}
*/
const index = async (req, res) => {
  try {
    const questions = await db.Question.find()
    console.log(questions)
    res.status(200).json( {questions} );
  } catch (err) {
    res.send(err);
  }
}
module.exports = {
  create: create,
  show: show,
  index: index
}
