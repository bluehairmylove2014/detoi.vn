import { ITest } from '@business-layer/services/entities';

export const Test: ITest = {
  id: '0',
  totalTime: 300,
  totalQuestion: 20,
  freelancerId: '1',
  quizQuestions: [
    {
      id: '0',
      question:
        'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
      point: 10,
      answers: [
        {
          id: '1',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '2',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '3',
          answer: 'Rửa bằng giấm',
          isCorrect: false,
        },
        {
          id: '4',
          answer: 'Rửa bằng xà phòng và nước',
          isCorrect: true,
        },
      ],
    },
    {
      id: '1',
      question:
        'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
      point: 10,
      answers: [
        {
          id: '1',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: true,
        },
        {
          id: '2',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '3',
          answer: 'Rửa bằng giấm',
          isCorrect: false,
        },
        {
          id: '4',
          answer: 'Rửa bằng xà phòng và nước',
          isCorrect: false,
        },
      ],
    },
    {
      id: '2',
      question:
        'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
      point: 10,
      answers: [
        {
          id: '1',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '2',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: true,
        },
        {
          id: '3',
          answer: 'Rửa bằng giấm',
          isCorrect: false,
        },
        {
          id: '4',
          answer: 'Rửa bằng xà phòng và nước',
          isCorrect: false,
        },
      ],
    },
    {
      id: '3',
      question:
        'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
      point: 10,
      answers: [
        {
          id: '1',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '2',
          answer: 'Ngâm trong dung dịch tẩy trắng',
          isCorrect: false,
        },
        {
          id: '3',
          answer: 'Rửa bằng giấm',
          isCorrect: false,
        },
        {
          id: '4',
          answer: 'Rửa bằng xà phòng và nước',
          isCorrect: true,
        },
      ],
    },
  ],
};
