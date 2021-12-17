/// <reference types="cypress" />
export {};
describe('Kitchen Sink', () => {
  it('.should() - assert that <title> is correct', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Kitchen Sink');
  });
});
