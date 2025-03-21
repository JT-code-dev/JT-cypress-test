import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

    it('starts the quiz when clicking Start Quiz', () => {
        cy.visit('/');
        cy.contains('Start Quiz').click();
        cy.get('.question').should('be.visible'); // Update with actual class/ID
    });

    it('selects an answer and moves to the next question', () => {
        cy.visit('/');
        cy.contains('Start Quiz').click();
        cy.get('.answer-option').first().click(); // Update with actual class/ID
        cy.get('.next-question-button').click(); // Update with actual class/ID
        cy.get('.question').should('be.visible');
    });

    it('completes the quiz and shows results', () => {
        cy.visit('/');
        cy.contains('Start Quiz').click();
        cy.get('.answer-option').each(($el) => {
            cy.wrap($el).click();
            cy.get('.next-question-button').click();
        });
        cy.contains('Your Score').should('be.visible'); // Update text based on app
    });
});