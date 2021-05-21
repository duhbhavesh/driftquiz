import { FC } from 'react';
import { useQuiz } from '../context/QuizContext';

export const QuizReport: FC = () => {
   const { state } = useQuiz();

   const getAttemptedQuestionsLength = (): number => {
      const questionsAttempted = state.quizResult.result.filter(
         (question) => question.attempted,
      );
      return questionsAttempted.length;
   };

   const getCorrectAnswersLength = (): number => {
      const correctAnswers = state.quizResult.result.filter(
         (question) => question.correctOption === question.selectedOption,
      );
      return correctAnswers.length;
   };

   const getIncorrectAnswersLength = (): number => {
      const incorrectAnswers = state.quizResult.result.filter(
         (question) => question.correctOption !== question.selectedOption,
      );
      return incorrectAnswers.length;
   };

   return (
      <>
         <div className='text-white'>Score Report</div>
         <div className='text-white'>{state.score} / 25</div>
         <div className='text-white'>
            Total Questions: {state.quizResult.result.length}
         </div>
         <div className='text-white'>
            Attempted Questions: {getAttemptedQuestionsLength()}
         </div>
         <div className='text-white'>
            Answered Correct {getCorrectAnswersLength()}
         </div>
         <div className='text-white'>
            Answered Incorrect {getIncorrectAnswersLength()}
         </div>
         <button className='group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
            Check Answers
         </button>
      </>
   );
};
