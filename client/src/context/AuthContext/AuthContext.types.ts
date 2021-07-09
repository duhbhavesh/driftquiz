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
   }: SignInUserType) => Promise<string>;

   handleUserSignUp: ({
      email,
      password,
      firstName,
      lastName,
   }: SignUpUserType) => Promise<any>;

   handleUserSignOut: () => void;
};

export type SignInUserType = {
   email: string;
   password: string;
   navigateToPath: string;
};

export type SignUpUserType = {
   email: string;
   password: string;
   firstName: string;
   lastName: string;
};
