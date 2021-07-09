const express = require('express');
const { getQuizzes } = require('../controllers/quiz.controller');
const router = express.Router();

router.get('/quizzes', getQuizzes);

module.exports = router;
