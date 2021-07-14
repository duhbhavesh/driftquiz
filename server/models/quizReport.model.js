const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuizReportSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
   },
   score: {
      type: Number,
   },
});

const QuizReport = mongoose.model('QuizReport', QuizReportSchema);

module.exports = { QuizReport };
