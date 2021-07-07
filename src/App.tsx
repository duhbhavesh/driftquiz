import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { QuizReport } from './pages/QuizReport';

export const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/play/:quizID' element={<Quiz />} />
            <Route path='/play/:quizID/report' element={<QuizReport />} />
         </Routes>
      </>
   );
};
