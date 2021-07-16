import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Question } from '../../components/Question';
import { QuizHeader } from '../../components/QuizHeader';
import { useQuiz } from '../../context/QuizContext/QuizContext';

export const Quiz = () => {
   const { state, dispatch } = useQuiz();
   const { quizId } = useParams();

   useEffect(() => {
      const findCurrentQuiz = state.quiz.find((quiz) => {
         return quiz.id === quizId;
      });
      dispatch({ type: 'SET_CURRENT_QUIZ', payload: findCurrentQuiz });
   }, [state.quiz]);

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
