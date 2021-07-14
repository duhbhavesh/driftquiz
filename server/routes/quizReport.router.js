const express = require('express');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const {
   handlePostScore,
   handleGetQuiz,
} = require('../controllers/quizReport.controller');
const router = express.Router();

router.get('/quizreport', handleAuthVerify, handleGetQuiz);
router.post('/quizreport', handleAuthVerify, handlePostScore);

module.exports = router;
