/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { registrationHelper } from '../utils/registrationHelper';

describe('Cart should be checked', () => {
  it('Cart should be empty', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-cart]').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('cartReducer')
      .should('have.length', 0);
    cy.get('[data-cy=data-cy-app-orderHistory]').click();
    cy.get('[data-cy=data-cy-app-emptyOrderHistory]').should(
      'have.text',
      'Order history is empty'
    );
  });
  it('Cart should have cars', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-cars]').click();
    cy.get('[data-cy=data-cy-app-BMW]').dblclick();
    cy.get('[data-cy=data-cy-app-BMW-message]').should(
      'have.text',
      'You have already added this car.'
    );
    cy.get('[data-cy=data-cy-app-Volvo]').click();
    cy.get('[data-cy=data-cy-app-cart]').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('cartReducer')
      .should('have.length', 2);
  });
});
