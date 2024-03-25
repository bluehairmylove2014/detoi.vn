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
