/// <reference types="cypress" />

describe('Tech Quiz App - E2E Flow', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('loads the homepage and displays the Start Quiz button', () => {
    cy.get('.btn.btn-primary').contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and displays the first question', () => {
    cy.get('.btn.btn-primary').contains('Start Quiz').click();
    cy.get('h2').should('be.visible');
  });

  it('answers a single question and moves to the next one', () => {
    cy.get('.btn.btn-primary').contains('Start Quiz').click();
    cy.get('.btn.btn-primary').contains(/^(\d+|[A-D])$/).first().click();
    cy.get('h2').should('be.visible'); // next question appears
  });

  it('completes the full quiz and shows final score', () => {
    cy.get('.btn.btn-primary').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary').contains(/^(\d+|[A-D])$/).first().click();
    }

    cy.get('.alert.alert-success')
      .should('be.visible')
      .and('contain.text', 'Your score:');
  });

  it('restarts the quiz when "Take New Quiz" is clicked', () => {
    cy.get('.btn.btn-primary').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('.btn.btn-primary').contains(/^(\d+|[A-D])$/).first().click();
    }

    cy.get('.alert.alert-success').should('be.visible');

    cy.get('.btn.btn-primary').contains('Take New Quiz').click();
    cy.get('h2').should('be.visible'); // new quiz starts
  });
});
