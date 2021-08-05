import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './pages/Auth/PrivateRoute';
import { useQuiz } from './context/QuizContext/QuizContext';
import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { Quiz } from './pages/Quiz/Quiz';
import { SignIn } from './pages/Auth/SignIn';
import { SignUp } from './pages/Auth/SignUp';
import { QuizReport } from './pages/QuizReport/QuizReport';
import { QuizReports } from './pages/QuizReports/QuizReports';
import { LeaderBoard } from './pages/LeaderBoard/LeaderBoard';
import { handleGetLeaderBoard } from './utils/serverRequest';
import { Toast } from './components/Toast';

export const App = () => {
   const { dispatch } = useQuiz();

   useEffect(() => {
      handleGetLeaderBoard(dispatch);
   }, []);

   return (
      <>
         <Header />
         <Toast />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/play/:quizId' element={<Quiz />} />
            <Route path='/play/:quizId/report' element={<QuizReport />} />
            <PrivateRoute path='/profile/reports' element={<QuizReports />} />
            <Route path='/leaderboard' element={<LeaderBoard />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
         </Routes>
      </>
   );
};
