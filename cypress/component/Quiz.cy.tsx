import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  const mockQuestions = [
    {
      question: 'What is Python?',
      answers: [
        { text: 'A snake', isCorrect: false },
        { text: 'A programming language', isCorrect: true },
        { text: 'A type of pasta', isCorrect: false },
        { text: 'A comedy group', isCorrect: false }
      ]
    },
    {
      question: 'Who created Python?',
      answers: [
        { text: 'Guido van Rossum', isCorrect: true },
        { text: 'Linus Torvalds', isCorrect: false },
        { text: 'Bill Gates', isCorrect: false },
        { text: 'Ada Lovelace', isCorrect: false }
      ]
    }
  ];

  it('renders the quiz component and starts quiz on click', () => {
    mount(<Quiz testQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();
    cy.contains(mockQuestions[0].question).should('be.visible');
  });

  it('selects an answer and moves to the next question', () => {
    mount(<Quiz testQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();
    cy.get('.btn.btn-primary').eq(1).click(); // Answer for Q1
    cy.contains(mockQuestions[1].question).should('be.visible');
  });

  it('completes the quiz and shows the score', () => {
    mount(<Quiz testQuestions={mockQuestions} />);
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 2; i++) {
      cy.get('.btn.btn-primary').eq(1).click(); // Assume answer 2 is always correct
    }

    cy.contains('Your score:').should('be.visible');
    cy.contains('Take New Quiz').should('be.visible');
  });
});
