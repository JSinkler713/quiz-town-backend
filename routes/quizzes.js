const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//routes
router.post('/', (req, res) => {
  db.Quiz.create(req.body, (err, createdQuiz) => {
    if (err) console.log('error', err);
    res.status(200).json( { quiz: createdQuiz } )
  });
});


module.exports = router
