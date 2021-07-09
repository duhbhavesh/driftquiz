import React from 'react';
import { QuizType } from '../../data/QuizData.types';

export type ResultType = {
   id: string;
   selectedOption: string;
   correctOption: string;
   attempted: boolean;
};

export type QuizReportsType = {
   id: string;
   quizId: QuizType;
   score: number;
   userId: string;
};

export type UserType = {
   id: string;
   firstName: string;
   email: string;
};

export type LeaderBoardType = {
   id: string;
   quizId: QuizType;
   score: number;
   userId: UserType;
};

export type InitialQuizStateType = {
   quiz: QuizType[];
   currentQuiz: null | QuizType;
   currentQuestionNumber: number;
   quizReports: QuizReportsType[];
   score: number;
   quizResult: {
      quizID: string;
      result: ResultType[];
   };
   leaderBoard: LeaderBoardType[];
};

export type QuizContextType = {
   state: InitialQuizStateType;
   dispatch: React.Dispatch<any>;
};
