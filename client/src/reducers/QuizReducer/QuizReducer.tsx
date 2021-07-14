import { ActionType } from './QuizReducer.types';
import { InitialQuizStateType } from '../../context/QuizContext/QuizContext.types';

export const QuizReducer = (
   state: InitialQuizStateType,
   action: ActionType,
): InitialQuizStateType => {
   switch (action.type) {
      case 'SET_QUIZ':
         return {
            ...state,
            quiz: action.payload,
         };

      case 'SET_CURRENT_QUIZ':
         return {
            ...state,
            currentQuiz: action.payload,
         };

      case 'SET_QUIZ_ID':
         return {
            ...state,
            quizResult: {
               ...state.quizResult,
               quizID: action.payload,
               result: [],
            },
         };

      case 'SET_RESULT':
         return {
            ...state,
            quizResult: {
               ...state.quizResult,
               result: [...state.quizResult?.result, action.payload],
            },
         };

      case 'INCREASE_QUESTION_NUMBER':
         const currentQuestion = state.currentQuestionNumber + 1;
         return {
            ...state,
            currentQuestionNumber: currentQuestion,
         };

      case 'INCREASE_SCORE':
         return { ...state, score: state.score + action.payload };

      case 'SET_QUIZ_REPORTS':
         return { ...state, quizReports: action.payload };

      case 'SET_LEADERBOARD':
         return { ...state, leaderBoard: action.payload };

      default:
         return state;
   }
};
