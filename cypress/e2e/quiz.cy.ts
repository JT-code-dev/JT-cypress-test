describe('Tech Quiz App', () => {
    it('loads the homepage', () => {
      cy.visit('/');
      cy.contains('Start Quiz').should('be.visible');
    });
  });
  