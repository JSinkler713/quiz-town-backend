const db = require('../models')

const show = (req,res) => {
  db.Quiz.find( {name: req.params.name }, (err, foundQuiz)=> {
    res.status(200).json({ quiz: foundQuiz });
  })
}
const create = (req, res) => {
  db.Quiz.create(req.body, (err, createdQuiz) => {
    if (err) console.log('error', err);
    res.status(200).json( { quiz: createdQuiz } )
  });
}

module.exports = {
  create: create,
  show: show
}
