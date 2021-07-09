import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext/QuizContext';

export const Home = () => {
   const { state, dispatch } = useQuiz();

   const handlePlayQuiz = (quizId: string) => {
      dispatch({ type: 'SET_QUIZ_ID', payload: quizId });
   };

   return (
      <>
         <div className='container my-12 mx-auto px-4 md:px-12'>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
               {state.quiz.map((quiz) => {
                  return (
                     <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:mx-auto'>
                        <div className='m-5 max-w-sm mx-auto overflow-hidden bg-black-light rounded-md dark:bg-gray-800'>
                           <img
                              className='object-cover object-center w-full h-56'
                              src={quiz.quizImage}
                              alt={quiz.topic}
                           />

                           <div className='flex items-center px-6 py-3 bg-black-lightest'>
                              <div className='text-lg font-semibold text-white'>
                                 {quiz.topic}
                              </div>
                           </div>

                           <div className='px-6 py-4'>
                              <p className='text-small font-semibold text-white dark:text-white'>
                                 Total Questions - {quiz.questions.length}
                              </p>
                              <Link to={`/play/${quiz.id}`} key={quiz.id}>
                                 <button
                                    id={quiz.id}
                                    onClick={() => handlePlayQuiz(quiz.id)}
                                    className='group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                                    Play Quiz
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};
