import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext/AuthContext';
import { GoGraph } from 'react-icons/go';
import { BiNotepad } from 'react-icons/bi';

export const Header: FC = () => {
   const {
      authState: { firstName, token },
      handleUserSignOut,
   } = useAuth();

   return (
      <>
         <div className='flex flex-row items-center justify-between bg-black-dark p-5'>
            <Link to='/home'>
               <div className='text-left md:pl-10 md:pr-10 text-2xl font-extrabold text-blue cursor-pointer'>
                  Driftquiz
               </div>
            </Link>
            <div className='flex flex-row md:pr-10'>
               <div className='flex flex-row items-center mr-5'>
                  <div className='text-left pr-5 text-xl font-extrabold text-blue cursor-pointer'>
                     {token && `Hi, ${firstName}`}
                  </div>
                  <Link to='/profile/reports'>
                     <BiNotepad
                        title='Quiz Reports'
                        className='mr-2'
                        fontSize='2rem'
                        color='#fff'
                     />
                  </Link>
                  <Link to='/leaderboard'>
                     <GoGraph
                        title='Leader Board'
                        className='mr-2'
                        fontSize='1.7rem'
                        color='#fff'
                     />
                  </Link>
               </div>
               <div>
                  {token ? (
                     <button
                        onClick={handleUserSignOut}
                        className='py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                        Log Out
                     </button>
                  ) : (
                     <Link to='/signin'>
                        <button className='py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                           Sign In
                        </button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
