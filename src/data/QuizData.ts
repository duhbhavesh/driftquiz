import { QuizDataType } from './QuizData.types';
import { nanoid } from 'nanoid';

export const quizData: QuizDataType = [
   {
      id: nanoid(),
      quizImage:
         'https://res.cloudinary.com/duhbhavesh/image/upload/v1621518385/driftquiz/quiz-1.jpg',
      topic: 'Photography Basics',
      questions: [
         {
            id: nanoid(),
            question: 'When Was Photoshop Invented?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: '1992',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '1965',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '1999',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: '1987',
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
                  option: 'High Digital Range',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'High Developing Range',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'High Dynamic Range',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'High Disturbance Range',
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
                  option: 'Rule of thirds',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Golden ratio',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Leading lines',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Three seconds rule',
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
                  option: 'Spots',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Fractions',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'F-stops',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Inches',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question: 'What Are the Elements ofthe Exposure Triangle?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Aperture – White Balance – Shutter Speed',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Shutter Speed – ISO – Camera Mode',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Aperture – ISO – Shutter Speed',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'ISO – White Balance – Flash Power',
                  isRight: false,
               },
            ],
         },
      ],
   },
   {
      id: nanoid(),
      quizImage:
         'https://res.cloudinary.com/duhbhavesh/image/upload/v1621518241/driftquiz/quiz-2.jpg',
      topic: 'Lightroom Quiz',
      questions: [
         {
            id: nanoid(),
            question:
               'Adobe Lightroom is a family of products consisting of Lightroom CC and?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Lightroom Classic CC',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Lightroom Classic',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Lightroom Cloud',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Adobe Photoshop Lightroom',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question:
               'Adobe Lightroom facilitates geographically organizing photos based on embedded?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Geolocation data',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Mapping',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Distorting',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'None of the above',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question: 'Adobe Lightroom 4 allows the creation of?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Photobooks',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Adventure',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Raster graphics',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'None of the above',
                  isRight: true,
               },
            ],
         },
         {
            id: nanoid(),
            question:
               'The early version of Photoshop Lightroom was formerly named?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Imaging',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Hamburg curl',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Lightroom',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'None of the above',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question:
               'Adobe Lightroom was initially released to the public as?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Windows-only',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Macintosh-only',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Adobe Labs',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Unix-only',
                  isRight: false,
               },
            ],
         },
      ],
   },
   {
      id: nanoid(),
      quizImage:
         'https://res.cloudinary.com/duhbhavesh/image/upload/v1621518241/driftquiz/quiz-2.jpg',
      topic: 'Photography Intermediate',
      questions: [
         {
            id: nanoid(),
            question:
               'In order to minimize file size and loss of quality of an image for printing, how should it be saved?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: '.gif',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '.tiff',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: '.png',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '.html',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question: 'Digital photography is creating a picture using',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'Film',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Drawing skills',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'CCD technology',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Chemical processes',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question: 'Some things to consider regarding photo composition are',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: 'File size and speed',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'Camera angle and framing',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: 'Pixels and storage space',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: 'File format and battery life',
                  isRight: true,
               },
            ],
         },
         {
            id: nanoid(),
            question:
               'The built in electronic flash on a camera generally has a range of how many feet?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: '1-4 ',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '5-10',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: '11-20',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '21-25 ',
                  isRight: false,
               },
            ],
         },
         {
            id: nanoid(),
            question: 'How many pixels are in a megapixel?',
            points: 5,
            options: [
               {
                  id: nanoid(),
                  option: '100',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '1,000',
                  isRight: false,
               },
               {
                  id: nanoid(),
                  option: '1,000,000',
                  isRight: true,
               },
               {
                  id: nanoid(),
                  option: '2,000,000',
                  isRight: false,
               },
            ],
         },
      ],
   },
];
