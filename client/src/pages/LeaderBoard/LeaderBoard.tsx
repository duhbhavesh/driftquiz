import { FC } from 'react';
import { useQuiz } from '../../context/QuizContext/QuizContext';

export const LeaderBoard: FC = () => {
   const {
      state: { leaderBoard },
   } = useQuiz();

   return (
      <>
         <div>
            <h2 className=' text-center font-extrabold mt-10 mb-5 mx-auto text-2xl text-blue'>
               Leader Board
            </h2>
            <div>
               {leaderBoard.map((user) => {
                  return (
                     <div
                        key={user.id}
                        className='xl:w-1/3 md:w-1/2 p-4 mx-auto'>
                        <div className='p-6 rounded-lg bg-black-dark text-center'>
                           <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-blue-dark mb-4'>
                              <svg
                                 fill='none'
                                 stroke='currentColor'
                                 stroke-linecap='round'
                                 stroke-linejoin='round'
                                 stroke-width='2'
                                 className='w-6 h-6'
                                 viewBox='0 0 24 24'>
                                 <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                                 <circle cx='12' cy='7' r='4'></circle>
                              </svg>
                           </div>
                           <p className='leading-relaxed text-white font-medium text-lg mb-2'>
                              Topic : {user.quizId?.topic}
                           </p>
                           <h2 className='text-lg text-white font-medium title-font mb-2'>
                              Name : {user.userId?.firstName}
                           </h2>

                           <p className='leading-relaxed text-white font-extrabold text-lg bg-black-lightest p-2 mt-4 mb-4 rounded-md'>
                              Score : {user?.score} / 25
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};
