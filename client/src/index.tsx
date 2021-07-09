import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { QuizProvider } from './context/QuizContext/QuizContext';
import { AuthProvider } from './context/AuthContext/AuthContext';
import './index.css';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <QuizProvider>
            <AuthProvider>
               <App />
            </AuthProvider>
         </QuizProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
);
