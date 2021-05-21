import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { QuizProvider } from './context/QuizContext';
import './index.css';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <QuizProvider>
            <App />
         </QuizProvider>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
);
