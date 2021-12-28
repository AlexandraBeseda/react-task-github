/// <reference types="cypress" />
import { registrationHelper } from '../utils/registrationHelper';

describe('Card should be checked', () => {
  it('card reducer should be empty', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-navigation-link-cars]').click();
    cy.get('[data-cy=data-cy-app-button-car-brand-BMW]').click();
    cy.get('[data-cy=data-cy-app-button-car-brand-Volvo]').click();
    cy.get('[data-cy=data-cy-app-navigation-link-cart]').click();
    cy.get(
      '[data-cy="data-cy-app-link-cart-car-in-cart-BMW-X2 xDrive28i"]'
    ).should('have.text', 'BMW X2 xDrive28i');
    cy.get(
      '[data-cy="data-cy-app-link-cart-car-in-cart-Volvo-XC60 T6 Momentum"]'
    ).should('have.text', 'Volvo XC60 T6 Momentum');
    cy.get('[data-cy="data-cy-app-link-cart-after-order-form"]').should(
      'contain.text',
      'The total amount of the order'
    );
    cy.get('[data-cy="data-cy-app-link-cart-after-order-form"]').should(
      'contain.text',
      'View order history'
    );
    cy.get('input[placeholder=Email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[placeholder=Name]')
      .type('sasha')
      .should('have.value', 'sasha');
    cy.get('input[placeholder=Surname]')
      .type('Bezze')
      .should('have.value', 'Bezze');
    cy.get('input[placeholder="Mobile phone"]')
      .type('+375291115588')
      .should('have.value', '+375291115588');

    cy.get('[data-cy=data-cy-app-buttom-submit-order]').click();
    cy.get('[data-cy="data-cy-app-link-cart-after-order-form"]')
      .children()
      .should('have.length', 4);

    cy.get('[data-cy="data-cy-app-link-cart-after-order-form"]').should(
      'contain.text',
      'Your order has been processed'
    );
    cy.get('[data-cy="data-cy-app-link-cart-after-order-form"]').should(
      'contain.text',
      'Your order num:'
    );
  });
});
