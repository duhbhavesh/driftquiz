import { FC } from 'react';
import { useQuiz } from '../../context/QuizContext/QuizContext';
import { QuizReport } from '../../components/QuizReport';
import { Link } from 'react-router-dom';

export const QuizReports: FC = () => {
   const {
      state: { quizReports },
   } = useQuiz();

   return (
      <>
         <div className='container my-12 mx-auto px-4 md:px-12'>
            <h2 className='text-center text-2xl font-extrabold text-blue'>
               My Quiz Reports
            </h2>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
               {quizReports.length !== 0 ? (
                  quizReports.map((quizReport) => {
                     return (
                        <QuizReport
                           quizReport={quizReport}
                           key={quizReport.id}
                        />
                     );
                  })
               ) : (
                  <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:mx-auto'>
                     <div className='m-5 max-w-sm mx-auto overflow-hidden bg-black-light rounded-md'>
                        <div className='flex items-center px-6 py-3 bg-black-lightest'>
                           <div className='text-lg mx-auto font-semibold text-white pt-5 pb-5'>
                              You haven't played any quiz yet
                           </div>
                        </div>

                        <div className='px-6 py-4'>
                           <Link to={'/home'}>
                              <button className='mx-auto group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                                 Explore Quizzes
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};
