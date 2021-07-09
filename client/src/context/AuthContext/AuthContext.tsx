import { createContext, FC, useContext, useReducer } from 'react';
import {
   AuthContextType,
   InitialAuthStateType,
   SignInUserType,
   SignUpUserType,
} from './AuthContext.types';
import { AuthReducer } from '../../reducers/AuthReducer/AuthReducer';
import axios from 'axios';
import { API_ENDPOINT } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC = ({ children }) => {
   const navigate = useNavigate();

   const localStorageSession = localStorage.getItem('session');
   const { token, firstName, email, userId } = localStorageSession
      ? JSON.parse(localStorageSession)
      : { token: '', firstName: '', email: '', userId: '' };

   const initialAuthState: InitialAuthStateType = {
      token,
      firstName,
      email,
      userId,
   };

   const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);

   const handleUserSignIn = async ({
      email,
      password,
      navigateToPath,
   }: SignInUserType) => {
      try {
         const { data } = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/signin`,
            data: {
               email,
               password,
            },
         });

         await localStorage.setItem('session', JSON.stringify(data));
         authDispatch({
            type: 'SET_USER_SIGNIN',
            payload: data,
         });
         navigate(navigateToPath, { replace: true });

         return 'SUCCESS';
      } catch (error) {
         return error?.response?.data?.errorMessage;
      }
   };

   const handleUserSignUp = async ({
      email,
      password,
      firstName,
      lastName,
   }: SignUpUserType) => {
      try {
         await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/signup`,
            data: {
               email,
               password,
               firstName,
               lastName,
            },
         });

         return 'SUCCESS';
      } catch (error) {
         console.log({ error });
         return error?.response?.data?.errorMessage;
      }
   };

   const handleUserSignOut = () => {
      setTimeout(() => {
         localStorage.removeItem('session');
         authDispatch({
            type: 'SET_USER_SIGNOUT',
            payload: { token: '', email: '', firstName: '', userId: '' },
         });
      }, 1000);
      navigate('/home');
   };

   return (
      <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            handleUserSignIn,
            handleUserSignUp,
            handleUserSignOut,
         }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
