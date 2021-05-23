import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Question } from '../components/Question';
import { QuizHeader } from '../components/QuizHeader';
import { useQuiz } from '../context/QuizContext';

export const Quiz = () => {
   const { state, dispatch } = useQuiz();
   const { quizID } = useParams();

   useEffect(() => {
      const findCurrentQuiz = state.quiz.find((quiz) => {
         return quiz.id === quizID;
      });
      dispatch({ type: 'SET_CURRENT_QUIZ', payload: findCurrentQuiz });
   }, []);

   return (
      <>
         <QuizHeader />
         {state.currentQuiz &&
         state.currentQuiz.questions[state.currentQuestionNumber] ? (
            <Question currentQuiz={state.currentQuiz} />
         ) : (
            <p>Quiz Ended</p>
         )}
      </>
   );
};
