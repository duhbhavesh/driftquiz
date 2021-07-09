const { QuizReport } = require('../models/quizReport.model');

const getLeaderBoardDetails = async (req, res) => {
   try {
      const leaderBoard = await QuizReport.find()
         .sort({ score: -1 })
         .populate({ path: 'userId' })
         .populate({ path: 'quizId' });

      res.status(201).json({
         success: true,
         leaderBoard,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to get Leaderboard scores',
         errorMessage: error.message,
      });
   }
};

module.exports = { getLeaderBoardDetails };
