import { Toaster } from 'react-hot-toast';

export const Toast = () => {
   return (
      <Toaster
         position='bottom-right'
         reverseOrder={false}
         toastOptions={{
            success: {
               iconTheme: {
                  primary: '#059669',
                  secondary: '#fff',
               },
            },
            error: {
               iconTheme: {
                  primary: '#ff4d4f',
                  secondary: '#fff',
               },
            },
         }}
      />
   );
};
