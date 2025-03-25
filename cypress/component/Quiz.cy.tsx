import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import type { Question } from '../../client/src/models/Question';

describe('Quiz Component', () => {
  const mockQuestions: Question[] = [
    {
      _id: '1',
      question: 'What is Python?',
      answers: [
        { text: 'A snake', isCorrect: false },
        { text: 'A programming language', isCorrect: true },
        { text: 'A type of pasta', isCorrect: false },
        { text: 'A comedy group', isCorrect: false },
      ],
    },
    {
      _id: '2',
      question: 'Who created Python?',
      answers: [
        { text: 'Guido van Rossum', isCorrect: true },
        { text: 'Linus Torvalds', isCorrect: false },
        { text: 'Bill Gates', isCorrect: false },
        { text: 'Ada Lovelace', isCorrect: false },
      ],
    },
  ];

  it('renders the quiz component', () => {
    mount(<Quiz initialQuestions={mockQuestions} />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when clicking Start Quiz', () => {
    mount(<Quiz initialQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();
    cy.contains(mockQuestions[0].question).should('be.visible');
  });

  it('selects an answer and moves to the next question', () => {
    mount(<Quiz initialQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();
    cy.get('.btn.btn-primary').contains('1').click(); // Click answer 1
    cy.contains(mockQuestions[1].question).should('be.visible');
  });

  it('completes the quiz and shows results', () => {
    mount(<Quiz initialQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();

    for (let i = 0; i < mockQuestions.length; i++) {
      cy.get('.btn.btn-primary').first().click();
    }

    cy.contains('Your score:').should('be.visible');
  });
});
