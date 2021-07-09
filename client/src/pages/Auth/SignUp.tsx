import React, { useState } from 'react';
import { SetStateAction, Dispatch } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { isValidPassword } from '../../utils/utils';

type SignUpUserType = {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

type SignUpFormErrorType = {
   user: SignUpUserType;
   setError: Dispatch<SetStateAction<SignUpUserType>>;
};

export const SignUp = () => {
   const { handleUserSignUp } = useAuth();
   const navigate = useNavigate();

   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });

   const [error, setError] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
   });

   const [serverError, setServerError] = useState('');

   const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [e.target.name]: e.target.value as string });
      return;
   };

   const SignUpValidation = ({
      user,
      setError,
   }: SignUpFormErrorType): boolean => {
      setError({ firstName: '', lastName: '', email: '', password: '' });
      let successValidation = true;

      if (!user.firstName) {
         setError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.lastName) {
         setError((error) => ({
            ...error,
            lastName: 'Please enter a valid name',
         }));
         successValidation = false;
      }

      if (!user.email) {
         setError((error) => ({
            ...error,
            email: 'Please enter a valid email',
         }));
      }

      if (!user.password || !isValidPassword(user.password)) {
         setError((error) => ({
            ...error,
            password:
               'Password must be 6 characters long & must contain Numbers',
         }));
         successValidation = false;
      }

      return successValidation;
   };

   const handleFormSubmit = async () => {
      if (SignUpValidation({ user, setError })) {
         try {
            const response = await handleUserSignUp({
               email: user.email,
               password: user.password,
               firstName: user.firstName,
               lastName: user.lastName,
            });

            if (response !== 'SUCCESS') {
               setServerError(response);
            } else {
               navigate('/signin');
            }
         } catch (error) {
            console.log({ error });
         }
      }
   };

   return (
      <>
         <div className='flex max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg mt-10 mb-20'>
            <div className='w-full px-6 py-8 md:px-8 pt-10 pb-14'>
               <h2 className='text-2xl font-bold text-center text-black mb-8'>
                  Sign Up
               </h2>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-first-name'>
                     First Name
                  </label>
                  <input
                     id='input-first-name'
                     placeholder='John'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                     name='firstName'
                     value={user.firstName}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {error.firstName && (
                     <small className='text-red-500 font-bold'>
                        {error.firstName}
                     </small>
                  )}
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-last-name'>
                     Last Name
                  </label>
                  <input
                     id='input-last-name'
                     placeholder='Smith'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='text'
                     name='lastName'
                     value={user.lastName}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {error.lastName && (
                     <small className='text-red-500 font-bold'>
                        {error.lastName}
                     </small>
                  )}
               </div>
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
                     <small className='text-red-500 font-bold'>
                        {error.email}
                     </small>
                  )}
               </div>
               <div className='mt-4'>
                  <label
                     className='block mb-2 text-sm font-medium text-black-light'
                     htmlFor='input-password'>
                     Password
                  </label>
                  <input
                     id='input-password'
                     placeholder='password'
                     className='block w-full px-4 py-2 text-black-lightest bg-white border border-gray-300 rounded-md focus:border-blue-light focus:outline-none focus:ring-2'
                     type='password'
                     name='password'
                     value={user.password}
                     onChange={(e) => handleOnChangeInput(e)}
                  />
                  {error.password && (
                     <small className='text-red-500 font-bold'>
                        {error.password}
                     </small>
                  )}
               </div>
               <div className='mt-8'>
                  <button
                     onClick={handleFormSubmit}
                     className='w-full px-4 py-3 tracking-wide font-bold text-white transition-colors duration-200 transform bg-blue rounded-full hover:bg-blue-light focus:outline-none focus:bg-blue-dark'>
                     Sign Up!
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
                     to='/signin'
                     className='text-sm text-black hover:underline'>
                     Existing User? Login
                  </Link>
                  <span className='w-1/5 border-b md:w-1/4'></span>
               </div>
            </div>
         </div>
      </>
   );
};
