const db = require('../models')

const show = (req,res) => {
  db.Quiz.find( {name: req.params.name }, (err, foundQuiz)=> {
    res.status(200).json({ quiz: foundQuiz });
  })
}
const create = (req, res) => {
  db.Quiz.create(req.body, (err, createdQuiz) => {
    if (err) console.log('error', err);
    console.log('just created', createdQuiz)
    res.status(200).json({ quiz: createdQuiz })
  });
}
const index = async (req, res) => {
  try {
    const quizzes = await db.Quiz.find()
    console.log(quizzes)
    res.status(200).json( {quizzes} );
  } catch (err) {
    res.send(err);
  }
}
module.exports = {
  create: create,
  show: show,
  index: index
}
