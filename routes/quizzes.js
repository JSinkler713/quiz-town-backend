const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//routes
router.post('/', ctrl.quizzes.create);
router.get('/search/:name', ctrl.quizzes.searchQuizzes);
router.get('/:name', ctrl.quizzes.show);
router.get('/', ctrl.quizzes.index);


module.exports = router
