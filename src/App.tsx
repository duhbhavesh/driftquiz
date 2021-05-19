import { FC } from 'react';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';

export const App: FC = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path='/' element={<Quiz />} />
            <Route path='/home' element={<Home />} />
            <Route path='/play' element={<Quiz />} />
         </Routes>
      </>
   );
};
