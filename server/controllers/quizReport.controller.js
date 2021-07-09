const { QuizReport } = require('../models/quizReport.model');

const handlePostScore = async (req, res) => {
   const { quizId, score } = req.body;
   const userId = req.user._id;
   try {
      const checkQuiz = await QuizReport.findOne({ userId, quizId });
      if (checkQuiz) {
         await QuizReport.findOneAndUpdate({ userId, quizId }, { score });
      } else {
         const newScore = new QuizReport({ quizId, userId, score });
         await newScore.save();
      }

      const quizScores = await QuizReport.find({ userId }).populate({
         path: 'quizId',
      });
      console.log(userId);

      res.status(201).json({
         success: true,
         quizScores,
      });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to post score',
         errorMessage: error.message,
      });
   }
};

const handleGetQuiz = async (req, res) => {
   const userId = req.user._id;
   try {
      const quiz = await QuizReport.find({ userId }).populate({
         path: 'quizId',
      });
      console.log(quiz);
      res.status(201).json({
         success: true,
         quiz,
      });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to get quiz',
      });
   }
};

module.exports = { handlePostScore, handleGetQuiz };
