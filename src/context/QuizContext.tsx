import { createContext, FC, useContext, useReducer } from 'react';
import { quizData } from '../data/QuizData';
import { QuizReducer } from '../reducers/QuizReducer';
import { InitialQuizStateType, QuizContextType } from './QuizContext.types';

export const initialQuizState: InitialQuizStateType = {
   quiz: quizData,
   currentQuiz: null,
   currentQuestionNumber: 0,
   score: 0,
   quizResult: {
      quizID: '',
      result: [],
   },
};

const QuizContext = createContext<QuizContextType>({
   state: initialQuizState,
   dispatch: () => null,
});

export const QuizProvider: FC = ({ children }) => {
   const [state, dispatch] = useReducer(QuizReducer, initialQuizState);

   return (
      <QuizContext.Provider value={{ state, dispatch }}>
         {children}
      </QuizContext.Provider>
   );
};

export const useQuiz = () => useContext(QuizContext);
