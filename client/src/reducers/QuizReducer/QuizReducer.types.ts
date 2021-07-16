import {
   LeaderBoardType,
   QuizReportsType,
   ResultType,
} from '../../context/QuizContext/QuizContext.types';
import { QuizDataType, QuizType } from '../../data/QuizData.types';

export type ActionType =
   | { type: 'SET_QUIZ'; payload: QuizDataType }
   | { type: 'SET_CURRENT_QUIZ'; payload: QuizType }
   | { type: 'RESET_QUIZ' }
   | { type: 'SET_QUIZ_ID'; payload: string }
   | { type: 'INCREASE_QUESTION_NUMBER'; payload?: number }
   | { type: 'INCREASE_SCORE'; payload: number }
   | { type: 'SET_RESULT'; payload: ResultType }
   | { type: 'SET_QUIZ_REPORTS'; payload: QuizReportsType[] }
   | { type: 'SET_LEADERBOARD'; payload: LeaderBoardType[] };
