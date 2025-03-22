import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when clicking Start Quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('h2').should('be.visible'); // This is your question element
  });

  it('selects an answer and moves to the next question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.btn.btn-primary').contains('1').click(); // Answer option
    cy.get('h2').should('be.visible'); // Next question should appear
  });

  it('completes the quiz and shows results', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Click the first answer 10 times
    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary').first().click();
    }

    cy.get('.alert.alert-success').should('contain.text', 'Your score:');
  });
});
