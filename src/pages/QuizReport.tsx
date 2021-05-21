import { FC, useState } from 'react';
import { AnswersModal } from '../components/AnswersModal';
import { useQuiz } from '../context/QuizContext';

export const QuizReport: FC = () => {
   const { state } = useQuiz();

   let [isOpen, setIsOpen] = useState(false);

   function closeModal() {
      setIsOpen(false);
   }

   function openModal() {
      setIsOpen(true);
   }

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
         <div className='flex flex-col items-center justify-center bg-black-darkest py-3 px-4 sm:px-6 lg:px-8 mt-10'>
            <div className='h-full max-w-md w-full space-y-8 rounded-md bg-black-light p-6 pb-16'>
               <div className='text-white text-center font-extrabold text-xl'>
                  Quiz Report
               </div>
               <div className='leading-loose'>
                  <div className='bg-black-lightest rounded-md p-8 mb-3 text-center text-2xl font-extrabold text-blue-light'>
                     Score : {state.score} / 25
                  </div>

                  <div className='bg-black-lightest rounded-md p-2 mb-3 text-center text-md font-bold  text-white'>
                     Total Questions : {state.quizResult.result.length}
                  </div>
                  <div className='bg-black-lightest rounded-md p-2 mb-3 text-center text-md font-bold  text-white'>
                     Attempted Questions : {getAttemptedQuestionsLength()}
                  </div>

                  <div className='bg-black-lightest rounded-md p-2 mb-3 text-center text-lg font-bold  text-green-600'>
                     Correct : {getCorrectAnswersLength()}
                  </div>
                  <div className='bg-black-lightest rounded-md p-2 mb-3 text-center text-lg font-bold  text-red-600'>
                     Incorrect : {getIncorrectAnswersLength()}
                  </div>
               </div>

               <button
                  onClick={openModal}
                  className='mx-auto group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  Check Answers
               </button>
            </div>
         </div>

         <AnswersModal
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
         />
      </>
   );
};
