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
    const quizzes = await db.Quiz.find().populate('questions')
    console.log(quizzes)
    res.status(200).json( {quizzes} );
  } catch (err) {
    res.send(err);
  }
}
const searchQuizzes = async (req, res) => {
  try {
    console.log(req.params.name)
    console.log(`/${req.params.name}/ig`)
    const quizzes = await db.Quiz.find( {name: { $regex: `${req.params.name}`, $options: "ig" } }).populate('questions')
    console.log('in search quizzes controller function')
    console.log(quizzes)
      if (quizzes) {
        res.status(200).json({quizzes});
        
      }
      else {
        res.status(200).json({quizzes: 'none'});
      }
  }
  catch (err) {
    console.log(err);
  }
}
module.exports = {
  create: create,
  show: show,
  index: index,
  searchQuizzes: searchQuizzes
}
