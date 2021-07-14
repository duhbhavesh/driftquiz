import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext/QuizContext';
import { QuizReportsType } from '../context/QuizContext/QuizContext.types';

export const QuizReport = ({ quizReport }: { quizReport: QuizReportsType }) => {
   const { id, quizId, score } = quizReport;
   const { dispatch } = useQuiz();

   const handlePlayQuiz = (quizId: string) => {
      dispatch({
         type: 'SET_QUIZ_ID',
         payload: quizId,
      });
   };

   return (
      <>
         <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:mx-auto'>
            <div className='m-5 max-w-sm mx-auto overflow-hidden bg-black-light rounded-md dark:bg-gray-800'>
               <img
                  className='object-cover object-center w-full h-56'
                  src={quizId.quizImage}
                  alt={quizId.topic}
               />

               <div className='flex items-center px-6 py-3 bg-black-lightest'>
                  <div className='text-lg font-semibold text-white'>
                     {quizId.topic}
                  </div>
               </div>

               <div className='px-6 py-4'>
                  <p className='text-small font-semibold text-white dark:text-white'>
                     Score - {score} / 25
                  </p>
                  <Link to={`/play/${quizReport.quizId.id}`} key={id}>
                     <button
                        id={id}
                        onClick={() => handlePlayQuiz(quizReport.quizId.id)}
                        className='group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                        Retake Quiz
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};
