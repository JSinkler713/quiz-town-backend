const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

//routes
router.post('/', ctrl.questions.create);
router.get('/', ctrl.questions.index);
router.get('/:name', ctrl.questions.show);


module.exports = router
