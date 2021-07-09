import { ActionType } from './AuthReducer.types';
import { InitialAuthStateType } from '../../context/AuthContext/AuthContext.types';

export const AuthReducer = (
   state: InitialAuthStateType,
   { type, payload }: ActionType,
) => {
   switch (type) {
      case 'SET_USER_SIGNIN':
         return { ...state, ...payload };

      case 'SET_USER_SIGNOUT':
         return { ...state, ...payload };

      default:
         return state;
   }
};
