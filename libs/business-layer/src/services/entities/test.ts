export interface ITest {
  id: string;
  totalTime: number;
  totalQuestion: number;
  quizQuestions: IQuestion[];
  freelancerId: string;
}

export interface IQuestion {
  id: string;
  question: string;
  point: number;
  answers: IAnswer[];
}

export interface IAnswer {
  id: string;
  answer: string;
  isCorrect: boolean;
}
