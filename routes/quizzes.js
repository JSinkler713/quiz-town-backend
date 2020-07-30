const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//routes
router.post('/', ctrl.quizzes.create);
router.get('/', ctrl.quizzes.index);
router.get('/:name', ctrl.quizzes.show);


module.exports = router
