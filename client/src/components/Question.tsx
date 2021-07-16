import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext/AuthContext';
import { useQuiz } from '../context/QuizContext/QuizContext';
import { QuizType } from '../data/QuizData.types';
import { handlePostScore } from '../utils/serverRequest';

type QuizProp = {
   currentQuiz: QuizType;
};

export const Question = ({ currentQuiz }: QuizProp) => {
   const {
      authState: { token },
   } = useAuth();
   const { quizId } = useParams();
   const navigate = useNavigate();
   const { state, dispatch } = useQuiz();
   const [disabledButtons, setDisabledButtons] = useState<boolean>(false);
   const [optionID, setOptionID] = useState<string>('');

   const handleNextQuestion = () => {
      if (currentQuiz) {
         dispatch({ type: 'INCREASE_QUESTION_NUMBER' });
      }
      setDisabledButtons(false);
      if (!optionID) {
         dispatch({
            type: 'SET_RESULT',
            payload: {
               id: currentQuiz.questions[state.currentQuestionNumber].id,
               selectedOption: '',
               attempted: false,
               correctOption: currentQuiz.questions[
                  state.currentQuestionNumber
               ].options.find((option) => option.isRight)?.id,
            },
         });
         console.log(
            'quiz option id',
            currentQuiz.questions[state.currentQuestionNumber].id,
         );
         console.log(
            'selected option id',
            currentQuiz.questions[state.currentQuestionNumber].options.find(
               (option) => option.isRight,
            )?.id,
         );
         console.log('next question', optionID);
         console.log('next question -------------------------------------');
      }
      setOptionID('');
   };

   const handleRightAnswer = (isRight: boolean, selectedOption: string) => {
      if (isRight) {
         dispatch({
            type: 'INCREASE_SCORE',
            payload: currentQuiz?.questions[state.currentQuestionNumber].points,
         });
      }
      setOptionID(selectedOption);
      setDisabledButtons((disabledButtons) => !disabledButtons);
      dispatch({
         type: 'SET_RESULT',
         payload: {
            id: currentQuiz.questions[state.currentQuestionNumber].id,
            selectedOption: selectedOption,
            attempted: true,
            correctOption: currentQuiz.questions[
               state.currentQuestionNumber
            ].options.find((option) => option.isRight)?.id,
         },
      });
      console.log(
         'quiz option id',
         currentQuiz.questions[state.currentQuestionNumber].id,
      );
      console.log(
         'selected option id',
         currentQuiz.questions[state.currentQuestionNumber].options.find(
            (option) => option.isRight,
         )?.id,
      );
      console.log('right answer-------------------------------------');
   };

   const handleGetQuizReport = () => {
      navigate(`/play/${currentQuiz.id}/report`, { replace: true });
      if (!optionID) {
         dispatch({
            type: 'SET_RESULT',
            payload: {
               id: currentQuiz.questions[state.currentQuestionNumber].id,
               selectedOption: '',
               attempted: false,
               correctOption: currentQuiz.questions[
                  state.currentQuestionNumber
               ].options.find((option) => option.isRight)?.id,
            },
         });
      }
      console.log(
         'quiz option id',
         currentQuiz.questions[state.currentQuestionNumber].id,
      );
      console.log(
         'selected option',
         currentQuiz.questions[state.currentQuestionNumber].options.find(
            (option) => option.isRight,
         )?.id,
      );
      console.log('quiz submit-------------------------------------');

      if (token) {
         handlePostScore(dispatch, token, state, quizId);
         console.log('working');
      }
   };

   const handleCorrectInCorrectStyling = (
      isRight: boolean,
      selectedButtonID: string,
   ): string => {
      if (isRight && selectedButtonID === optionID) {
         return 'bg-green-500';
      }

      if (!isRight && selectedButtonID === optionID) {
         return 'bg-red-500';
      }
      return '';
   };

   return (
      <>
         <div className='flex flex-col items-center justify-center bg-black-darkest py-3 px-4 sm:px-6 lg:px-8'>
            <div className='h-full max-w-md w-full space-y-8 rounded-md bg-black-light p-6 pb-16'>
               <div>
                  <h2 className='mt-6 mb-12 text-center text-xl font-bold text-white'>
                     {
                        currentQuiz.questions[state.currentQuestionNumber]
                           .question
                     }
                  </h2>
               </div>
               <div>
                  {currentQuiz.questions[
                     state.currentQuestionNumber
                  ].options.map((option) => {
                     return (
                        <button
                           key={option.id}
                           onClick={() =>
                              handleRightAnswer(option.isRight, option.id)
                           }
                           type='button'
                           disabled={disabledButtons}
                           className={`group relative w-full flex justify-center py-2 px-4 border border-transparent mt-7 text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              handleCorrectInCorrectStyling(
                                 option.isRight,
                                 option.id,
                              )
                                 ? handleCorrectInCorrectStyling(
                                      option.isRight,
                                      option.id,
                                   )
                                 : 'bg-black-lightest'
                           }`}>
                           {option.option}
                        </button>
                     );
                  })}
               </div>
            </div>
            {state.currentQuestionNumber ===
            currentQuiz.questions.length - 1 ? (
               <button
                  onClick={handleGetQuizReport}
                  className='group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  Submit
               </button>
            ) : (
               <button
                  onClick={handleNextQuestion}
                  className='group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                  Next Question
               </button>
            )}
         </div>
      </>
   );
};
