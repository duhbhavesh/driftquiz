import React from 'react';
import { QuizType } from '../data/QuizData.types';

export type ResultType = {
   id: string;
   selectedOption: string;
   correctOption: string;
   attempted: boolean;
};

export type InitialQuizStateType = {
   quiz: QuizType[];
   currentQuiz: null | QuizType;
   currentQuestionNumber: number;
   score: number;
   quizResult: {
      quizID: string;
      result: ResultType[];
   };
};

export type QuizContextType = {
   state: InitialQuizStateType;
   dispatch: React.Dispatch<any>;
};
