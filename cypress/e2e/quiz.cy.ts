/// <reference types="cypress" />

describe('Tech Quiz App - E2E Flow with Intercept', () => {
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

  beforeEach(() => {
    // Intercept the API call and return our mock data
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
    }).as('getQuestions');

    // Visit the frontend
    cy.visit('/');
  });

  it('displays the Start Quiz button', () => {
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and displays the first mock question', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions'); // Wait for the intercept to resolve
    cy.contains(mockQuestions[0].question).should('be.visible');
  });

  it('advances to the second question on answer click', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('.btn.btn-primary').contains('2').click(); // Select "A programming language"
    cy.contains(mockQuestions[1].question).should('be.visible');
  });

  it('completes the quiz and shows the score', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    for (let i = 0; i < mockQuestions.length; i++) {
      cy.get('.btn.btn-primary').first().click();
    }
    cy.contains('Your score:').should('be.visible');
  });

  it('restarts the quiz when "Take New Quiz" is clicked', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    for (let i = 0; i < mockQuestions.length; i++) {
      cy.get('.btn.btn-primary').first().click();
    }
    cy.contains('Take New Quiz').click();
    cy.wait('@getQuestions');
    cy.contains(mockQuestions[0].question).should('be.visible');
  });
});
