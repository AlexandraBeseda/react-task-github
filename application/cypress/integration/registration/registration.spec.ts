import { registrationHelper } from '../utils/registrationHelper';
/// <reference types="cypress" />
import 'cypress-localstorage-commands';

describe('Registrate account', () => {
  it('should be checked registration in localStorage', () => {
    cy.visit('http://localhost:3000/regist');
    cy.get('input[type=email]').should('have.value', '');
    cy.get('input[type=password]').should('have.value', '');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
    cy.getLocalStorage('email').should('equal', 'pararam862111@gmail.com');
    cy.getLocalStorage('password').should('equal', '123456790');
  });
  it('should be checked incorrect email and password', () => {
    cy.visit('http://localhost:3000/regist');
    cy.get('input[type=email]').type('pararam');
    cy.get('input[type=password]').type('1');
    cy.get('[data-cy=data-cy-app-link-registration-error-email]').should(
      'exist'
    );
    cy.get('[data-cy=data-cy-app-link-registration-error-password]').should(
      'exist'
    );
  });
  it('account should be deleted', () => {
    registrationHelper();
    cy.get('[data-cy=data-cy-app-button-delete-account]').click();
    cy.get('input[type=email]').should('have.value', '');
    cy.get('input[type=password]').should('have.value', '');
  });
});
