import { InitialAuthStateType } from '../../context/AuthContext/AuthContext.types';

export type ActionType =
   | { type: 'SET_USER_SIGNIN'; payload: InitialAuthStateType }
   | { type: 'SET_USER_SIGNOUT'; payload: InitialAuthStateType };
