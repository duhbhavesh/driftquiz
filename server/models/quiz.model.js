const mongoose = require('mongoose');
const { Schema } = mongoose;
const quizzes = require('../data/quizzes');

const OptionSchema = new Schema({
   option: { type: String },
   isRight: { type: Boolean },
});

const QuestionSchema = new Schema({
   question: {
      type: String,
      required: true,
   },
   points: {
      type: Number,
      required: true,
   },
   options: [OptionSchema],
});

const QuizSchema = new Schema({
   quizImage: {
      type: String,
      required: true,
   },
   topic: {
      type: String,
      required: true,
   },
   questions: [QuestionSchema],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

const PopulateQuizzes = async () => {
   try {
      quizzes.forEach(async (quiz) => {
         const newQuiz = new Quiz(quiz);
         const savedQuiz = await newQuiz.save();
         console.log(savedQuiz);
      });
   } catch (error) {
      console.log(error);
   }
};

module.exports = { Quiz, PopulateQuizzes };
