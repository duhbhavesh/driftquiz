export type OptionType = {
   id: string;
   text: string;
   isRight: boolean;
};

export type QuestionType = {
   id: string;
   question: string;
   points: number;
   options: OptionType[];
};

export type QuizType = {
   quizName: string;
   questions: QuestionType[];
};
