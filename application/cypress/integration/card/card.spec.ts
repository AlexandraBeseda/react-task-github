/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { registrationHelper } from '../utils/registrationHelper';

describe('Card should be checked', () => {
  it('card reducer should be empty', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-cars]').click();
    cy.get('[data-cy=data-cy-app-BMW]').click();
    cy.get('[data-cy=data-cy-app-Volvo]').click();
    cy.get('[data-cy=data-cy-app-cart]').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('cartReducer')
      .should('have.length', 2);
    cy.window()
      .its('store')
      .invoke('getState')
      .its('paymentCardReducer')
      .should('deep.equal', {
        surname: '',
        name: '',
        email: '',
        mobile: '',
        orderNum: '',
        total: 0
      });

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

    cy.get('[data-cy=data-cy-app-submitOrder]').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('paymentCardReducer')
      .should('not.deep.equal', {
        surname: '',
        name: '',
        email: '',
        mobile: '',
        orderNum: '',
        total: 0
      });
    /* view order history */
    //  cy.get('.CartFormHeader_link__RimOt').click();
    /* change language to Ru */
    //  cy.get('.NavBar_menu__3YfQK > :nth-child(2)').click();
    /* delete account */
    //   cy.get('#forCypress').click();
  });
});
