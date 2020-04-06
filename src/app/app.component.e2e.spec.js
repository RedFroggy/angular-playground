
context('Page should render', () => {

  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  it('Title should exists', () => {
    cy.get('#appTitle').should('contain', 'angular-cli!');

    cy.get('#locale').select('en').then(() => {
      cy.get('#appTitle').should('contain', 'angular-cli!');
    });
  });
});