import { ResultType } from '../context/QuizContext.types';
import { QuizDataType, QuizType } from '../data/QuizData.types';

export type ActionType =
   | { type: 'SET_QUIZ'; payload: QuizDataType }
   | { type: 'SET_CURRENT_QUIZ'; payload: QuizType }
   | { type: 'SET_QUIZ_ID'; payload: string }
   | { type: 'SET_RESULT'; payload: ResultType }
   | { type: 'INCREASE_QUESTION_NUMBER'; payload?: number }
   | { type: 'INCREASE_SCORE'; payload: number };
