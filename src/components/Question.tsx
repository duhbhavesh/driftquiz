import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuiz } from '../context/QuizContext';
import { QuizType } from '../data/QuizData.types';

type QuizProp = {
   currentQuiz: QuizType;
};

export const Question = ({ currentQuiz }: QuizProp) => {
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
   };

   return (
      <>
         <div className='flex flex-col items-center justify-center bg-black-darkest py-3 px-4 sm:px-6 lg:px-8'>
            <div className='h-full max-w-md w-full space-y-8 rounded-md bg-black-light p-6 pb-16'>
               <div>
                  {console.log(state.currentQuestionNumber)}
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
                              option.isRight && option.id === optionID
                                 ? 'bg-green-500'
                                 : !option.isRight && option.id === optionID
                                 ? 'bg-red-500'
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
