export type OptionType = {
   id: string;
   option: string;
   isRight: boolean;
};

export type QuestionType = {
   id: string;
   question: string;
   points: number;
   options: OptionType[];
};

export type QuizType = {
   id: string;
   quizImage: string;
   topic: string;
   questions: QuestionType[];
};

export type QuizDataType = QuizType[];
