import { FC } from 'react';
import { useQuiz } from '../context/QuizContext/QuizContext';

export const QuizHeader: FC = () => {
   const { state } = useQuiz();

   return (
      <>
         <div className='flex flex-row justify-between h-full mx-auto mt-6 max-w-md w-full rounded-md py-3 px-6 bg-black-light'>
            <span className='text-white font-bold text-lg'>
               <span className='text-xl'>
                  {state.currentQuestionNumber + 1}
               </span>
               /5
            </span>
            <span className='text-white font-bold text-xl'>
               Score: {state.score}
            </span>
         </div>
      </>
   );
};
