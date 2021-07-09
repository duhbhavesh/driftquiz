import { createContext, FC, useContext, useReducer } from 'react';
import { quizData } from '../../data/QuizData';
import { QuizReducer } from '../../reducers/QuizReducer/QuizReducer';
import { InitialQuizStateType, QuizContextType } from './QuizContext.types';

export const initialQuizState: InitialQuizStateType = {
   quiz: quizData,
   currentQuiz: null,
   currentQuestionNumber: 0,
   quizReports: [],
   score: 0,
   quizResult: {
      quizID: '',
      result: [],
   },
   leaderBoard: [],
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
