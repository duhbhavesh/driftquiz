import React from 'react';

export type InitialAuthStateType = {
   token: string;
   firstName: string;
   email: string;
   userId: string;
};

export type AuthContextType = {
   authState: InitialAuthStateType;
   authDispatch: React.Dispatch<any>;
   handleUserSignIn: ({
      email,
      password,
      navigateToPath,
      notify,
   }: SignInUserType) => Promise<string>;

   handleUserSignUp: ({
      email,
      password,
      firstName,
      lastName,
      notify,
   }: SignUpUserType) => Promise<any>;

   handleUserSignOut: ({ notify }: SignOutType) => void;
};

export type SignInUserType = {
   email: string;
   password: string;
   navigateToPath: string;
   notify: Function;
};

export type SignUpUserType = {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
   notify: Function;
};

export type SignOutType = {
   notify: Function;
};
