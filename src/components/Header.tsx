import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
   return (
      <>
         <div className='mt-5'>
            <Link to='/home'>
               <h1 className='text-center text-2xl font-extrabold text-blue cursor-pointer'>
                  Driftquiz
               </h1>
            </Link>
         </div>
      </>
   );
};
