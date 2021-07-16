import React, { Dispatch, useState, useEffect, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';

type SignInUserType = {
   email: string;
   password: string;
};

type SignInFormErrorType = {
   user: SignInUserType;
   setError: Dispatch<SetStateAction<SignInUserType>>;
};

export const SignIn = () => {
   const [user, setUser] = useState({
      email: '',
      password: '',
   });
   const [error, setError] = useState({
      email: '',
      password: '',
   });
   const [serverError, setServerError] = useState('');
   const location = useLocation();
   const state = (location.state as { from: string }) || null;
   const {
      handleUserSignIn,
      authState: { token },
   } = useAuth();

   const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [e.target.name]: e.target.value as string });
      return;
   };

   const navigate = useNavigate();
   const notify = (message: string) => toast.success(message);

   const SignInValidation = ({
      user,
      setError,
   }: SignInFormErrorType): boolean => {
      setError({ email: '', password: '' });
      let successValidation = true;
      if (!user.email) {
         setError((error) => ({
            ...error,
            email: 'Please enter a Valid E-mail',
         }));
         successValidation = false;
      }

      if (!user.password) {
         setError((error) => ({
            ...error,
            password: 'Please enter a Valid password',
         }));
         successValidation = false;
      }
      return successValidation;
   };

   useEffect(() => {
      token && navigate('/');
   }, []);

   const handleFormSubmit = async () => {
      if (SignInValidation({ user, setError })) {
         try {
            const response: any = await handleUserSignIn({
               email: user.email,
               password: user.password,
               navigateToPath: state?.from ? state?.from : '/',
               notify,
            });

            if (response !== 'SUCCESS') {
               setServerError(response);
            }
         } catch (error) {
            console.log({ error });
         }
      }
   };

   return (
      <>
         <div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg mt-20'>
            <div className='w-full px-6 py-8 md:px-8 pt-10 pb-14'>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Sign in to Driftquiz!
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-email'>
                     Email Address
                  </label>
                  <input
                     id='input-email'
                     placeholder='name@example.com'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='email'
                     name='email'
                     value={user.email}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {error.email && (
                     <small className='text-black-dark'>{error.email}</small>
                  )}
               </div>
               <div className='mt-4'>
                  <div className='flex justify-between'>
                     <label
                        className='block mb-2 text-sm font-medium text-black-light'
                        htmlFor='input-password'>
                        Password
                     </label>
                  </div>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                     name='password'
                     value={user.password}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {error.password && <small>{error.password}</small>}
               </div>
               <div className='mt-8'>
                  <button
                     onClick={handleFormSubmit}
                     className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
                     Sign in
                  </button>
               </div>
               <div className='p-2 mt-4 mx-auto'>
                  {serverError && (
                     <small className='text-center mx-auto block text-red-500 font-bold'>
                        {serverError}
                     </small>
                  )}
               </div>
               <div className='flex items-center justify-between mt-4'>
                  <span className='w-1/5 border-b md:w-1/4'></span>
                  <Link
                     to='/signup'
                     className='text-sm text-black hover:underline'>
                     Or Create an Account
                  </Link>
                  <span className='w-1/5 border-b md:w-1/4'></span>
               </div>
            </div>
         </div>
      </>
   );
};
