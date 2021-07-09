const { Quiz } = require('../models/quiz.model');

const getQuizzes = async (req, res) => {
   try {
      const quizzes = await Quiz.find();
      res.status(201).json({
         success: true,
         response: quizzes,
      });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to retrieve quizzes',
         errorMessage: error.message,
      });
   }
};

module.exports = { getQuizzes };
