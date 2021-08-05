import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext/AuthContext';
import { GoGraph } from 'react-icons/go';
import { BiNotepad } from 'react-icons/bi';
import Logo from '../logo.svg';
import toast from 'react-hot-toast';

export const Header: FC = () => {
   const {
      authState: { firstName, token },
      handleUserSignOut,
   } = useAuth();

   const notify = (message: string) => toast.success(message);

   return (
      <>
         <div className='flex flex-col  justify-between md:flex-row items-center bg-black-dark p-5'>
            <div className='flex justify-between w-full md:w-1/4 mb-4 md:mb-0'>
               <Link
                  to='/'
                  className='flex items-center text-left md:pl-10 md:pr-10 mb-5 md:mb-0 text-2xl font-extrabold text-blue cursor-pointer'>
                  <img className='h-8 w-10 mr-2' src={Logo} alt='' />
                  <span className='inline-block text-sm md:text-2xl'>
                     Driftquiz
                  </span>
               </Link>
               <div className='block md:hidden'>
                  {token ? (
                     <button
                        onClick={() => handleUserSignOut({ notify })}
                        className='py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                        Sign out
                     </button>
                  ) : (
                     <Link to='/signin'>
                        <button className='py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                           Sign in
                        </button>
                     </Link>
                  )}
               </div>
            </div>
            <div className='flex flex-row pr-0 md:pr-10 w-full md:w-2/5 md:justify-end'>
               <div className='flex flex-row items-center mr-0 md:mr-5 w-full md:w-5/12 justify-between md:justify-around'>
                  <div className='text-left pl-3 md:pl-0 pr-5 text-xl font-extrabold text-blue cursor-pointer'>
                     {token && `Hi, ${firstName}`}
                  </div>
                  <div className='flex items-center'>
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
               </div>
               <div className='hidden md:block'>
                  {token ? (
                     <button
                        onClick={() => handleUserSignOut({ notify })}
                        className='py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                        Sign out
                     </button>
                  ) : (
                     <Link to='/signin'>
                        <button className='py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                           Sign in
                        </button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};
