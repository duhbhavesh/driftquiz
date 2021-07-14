import { useAuth } from '../../context/AuthContext/AuthContext';
import { Route, Navigate } from 'react-router';

export const PrivateRoute = ({ path, ...props }: any) => {
   const {
      authState: { token },
   } = useAuth();

   return token ? (
      <Route {...props} path={path} />
   ) : (
      <Navigate state={{ from: path }} replace to='/signin' />
   );
};
