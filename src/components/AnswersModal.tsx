import { Fragment } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Dialog, Transition } from '@headlessui/react';

export const AnswersModal = ({ openModal, closeModal, isOpen }: any) => {
   const {
      state: { quizResult, currentQuiz },
   } = useQuiz();

   const isOptionSelected = (optionID: string, quizID: string) => {
      const currentQuiz = quizResult.result.find(
         (result) => result.id === quizID,
      );
      if (currentQuiz?.selectedOption === optionID) {
         return true;
      }
      return false;
   };

   const isCorrectAnswer = (optionID: string, quizID: string): boolean => {
      const currentQuiz = quizResult.result.find(
         (result) => result.id === quizID,
      );
      return currentQuiz?.correctOption === optionID;
   };

   const handleCorrectInCorrectStyling = (optionID: string, quizID: string) => {
      if (isCorrectAnswer(optionID, quizID)) {
         return 'bg-green-500';
      }

      if (
         isOptionSelected(optionID, quizID) &&
         isCorrectAnswer(optionID, quizID)
      ) {
         return 'bg-green-500';
      }

      if (
         isOptionSelected(optionID, quizID) &&
         !isCorrectAnswer(optionID, quizID)
      ) {
         return 'bg-red-500';
      }
      return '';
   };

   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog
               as='div'
               className='fixed inset-0 z-10 overflow-y-auto'
               onClose={closeModal}>
               <div className='min-h-screen px-4 text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0'
                     enterTo='opacity-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100'
                     leaveTo='opacity-0'>
                     <Dialog.Overlay className='fixed inset-0 bg-black-darkest opacity-30' />
                  </Transition.Child>
                  <span
                     className='inline-block h-screen align-middle'
                     aria-hidden='true'>
                     &#8203;
                  </span>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0 scale-95'
                     enterTo='opacity-100 scale-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100 scale-100'
                     leaveTo='opacity-0 scale-95'>
                     <div className='inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black-light shadow-xl rounded-md'>
                        <Dialog.Title
                           as='h3'
                           className='text-lg font-medium leading-6 text-white mb-5'>
                           Answers:
                        </Dialog.Title>

                        <div className='bg-black-light text-white'>
                           {currentQuiz?.questions.map((quiz, index) => {
                              return (
                                 <div>
                                    <div className='mb-3 font-semibold'>
                                       {index + 1} - {quiz.question}
                                    </div>
                                    <div className='mb-10'>
                                       <div>
                                          {quiz.options.map((option) => {
                                             return (
                                                <div
                                                   className={`group relative w-full flex justify-center py-2 px-4 border border-transparent mt-3 text-sm font-medium rounded-md text-white ${
                                                      handleCorrectInCorrectStyling(
                                                         option.id,
                                                         quiz.id,
                                                      )
                                                         ? handleCorrectInCorrectStyling(
                                                              option.id,
                                                              quiz.id,
                                                           )
                                                         : 'bg-black-lightest'
                                                   }`}>
                                                   {
                                                      isOptionSelected(
                                                         option.id,
                                                         quiz.id,
                                                      )
                                                         ? isCorrectAnswer(
                                                              option.id,
                                                              quiz.id,
                                                           )
                                                            ? option.option /* prints correct option -> When isOptionSelected: true, isCorrectAnswer: true */
                                                            : option.option /* prints incorrect option -> When isOptionSelected: true, isCorrectAnswer: false */
                                                         : option.option /* prints remaining options -> When isOptionSelected: false */
                                                   }
                                                </div>
                                             );
                                          })}
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>

                        <div className='mt-4'>
                           <button
                              onClick={closeModal}
                              className='mx-auto group relative flex justify-center py-2 px-4 mt-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2'>
                              Close
                           </button>
                        </div>
                     </div>
                  </Transition.Child>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};
