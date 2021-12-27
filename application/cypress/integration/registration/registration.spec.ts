import { registrationHelper } from '../utils/registrationHelper';
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe('Registrate account', () => {
  it('should be checked registration in redux store and localStorage', () => {
    cy.visit('http://localhost:3000/regist');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('registrationReducer')
      .should('deep.equal', {
        email: '',
        password: '',
        isLoading: false,
        error: ''
      });
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
    cy.getLocalStorage('email').should('equal', 'pararam862111@gmail.com');
    cy.getLocalStorage('password').should('equal', '123456790');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('registrationReducer')
      .should('deep.equal', {
        email: 'pararam862111@gmail.com',
        password: '123456790',
        isLoading: false,
        error: ''
      });
  });
  it('should be checked incorrect email and password', () => {
    cy.visit('http://localhost:3000/regist');
    cy.get('input[type=email]').type('pararam');
    cy.get('input[type=password]').type('1');
    cy.get('[data-cy=data-cy-app-errorEmail]').should('exist');
    cy.get('[data-cy=data-cy-app-errorPassword]').should('exist');
  });
  it('account should be deleted', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-deleteAccount]').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .its('registrationReducer')
      .should('deep.equal', {
        email: '',
        password: '',
        isLoading: false,
        error: ''
      });
  });
});
