import axios from 'axios';
import { Dispatch } from 'react';
import { API_ENDPOINT } from './utils';

export const handlePostScore = async (
   disptach: Dispatch<any>,
   token: string,
   state: any,
   quizId: string,
) => {
   try {
      const {
         data: { quizScores },
      } = await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/quizreport`,
         headers: {
            Authorization: token,
         },
         data: {
            score: state.score,
            quizId,
         },
      });

      disptach({
         type: 'SET_QUIZ_REPORTS',
         payload: quizScores,
      });
   } catch (error) {
      console.log(error);
   }
};

export const handleGetQuizReports = async (
   disptach: Dispatch<any>,
   token: string,
) => {
   try {
      const {
         data: { quiz },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/quizreport`,
         headers: {
            Authorization: token,
         },
      });

      disptach({
         type: 'SET_QUIZ_REPORTS',
         payload: quiz,
      });
   } catch (error) {
      console.log(error);
   }
};

export const handleGetLeaderBoard = async (disptach: Dispatch<any>) => {
   try {
      const {
         data: { leaderBoard },
      } = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/leaderboard`,
      });

      disptach({
         type: 'SET_LEADERBOARD',
         payload: leaderBoard,
      });
   } catch (error) {
      console.log({ error });
   }
};
