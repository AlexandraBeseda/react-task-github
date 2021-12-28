/// <reference types="cypress" />
import { registrationHelper } from '../utils/registrationHelper';

describe('Cart should be checked', () => {
  it('Cart should be empty', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-navigation-link-cart]').click();
    cy.get('[data-cy="data-cy-app-link-start-shopping"]').should(
      'have.text',
      'Start shopping'
    );
    cy.get('[data-cy=data-cy-app-link-order-history]').click();
    cy.get('[data-cy= data-cy-app-empty-order-history]').should(
      'have.text',
      'Order history is empty'
    );
  });
  it('Cart should have cars', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-navigation-link-cars]').click();
    cy.get('[data-cy=data-cy-app-button-car-brand-BMW]').dblclick();
    cy.get('[data-cy=data-cy-app-BMW-message]').should(
      'have.text',
      'You have already added this car.'
    );
    cy.get('[data-cy=data-cy-app-button-car-brand-Volvo]').click();
    cy.get('[data-cy=data-cy-app-navigation-link-cart]').click();
    cy.get(
      '[data-cy="data-cy-app-link-cart-car-in-cart-BMW-X2 xDrive28i"]'
    ).should('have.text', 'BMW X2 xDrive28i');
    cy.get(
      '[data-cy="data-cy-app-link-cart-car-in-cart-Volvo-XC60 T6 Momentum"]'
    ).should('have.text', 'Volvo XC60 T6 Momentum');
  });
});
