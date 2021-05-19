import { QuizType } from './QuizData.types';
import { nanoid } from 'nanoid';

const QuizData: QuizType = {
   quizName: 'Level up your Photography knowledge!',
   questions: [
      {
         id: nanoid(),
         question: 'When Was Photoshop Invented?',
         points: 5,
         options: [
            {
               id: nanoid(),
               text: '1992',
               isRight: false,
            },
            {
               id: nanoid(),
               text: '1965',
               isRight: false,
            },
            {
               id: nanoid(),
               text: '1999',
               isRight: true,
            },
            {
               id: nanoid(),
               text: '1987',
               isRight: false,
            },
         ],
      },
      {
         id: nanoid(),
         question: 'What Does HDR Stand For?',
         points: 5,
         options: [
            {
               id: nanoid(),
               text: 'High Digital Range',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'High Developing Range',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'High Dynamic Range',
               isRight: true,
            },
            {
               id: nanoid(),
               text: 'High Disturbance Range',
               isRight: false,
            },
         ],
      },
      {
         id: nanoid(),
         question:
            'Which of These Is NOT a Compositional  Guideline in Photograph',
         points: 5,
         options: [
            {
               id: nanoid(),
               text: 'Rule of thirds',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Golden ratio',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Leading lines',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Three seconds rule',
               isRight: true,
            },
         ],
      },
      {
         id: nanoid(),
         question: 'What Is Aperture Measured In?',
         points: 5,
         options: [
            {
               id: nanoid(),
               text: 'Spots',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Fractions',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'F-stops',
               isRight: true,
            },
            {
               id: nanoid(),
               text: 'Inches',
               isRight: false,
            },
         ],
      },
      {
         id: nanoid(),
         question: '. What Are the Elements ofthe Exposure Triangle?',
         points: 5,
         options: [
            {
               id: nanoid(),
               text: 'Aperture – White Balance – Shutter Speed',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Shutter Speed – ISO – Camera Mode',
               isRight: false,
            },
            {
               id: nanoid(),
               text: 'Aperture – ISO – Shutter Speed',
               isRight: true,
            },
            {
               id: nanoid(),
               text: 'ISO – White Balance – Flash Power',
               isRight: false,
            },
         ],
      },
   ],
};

export { QuizData };
