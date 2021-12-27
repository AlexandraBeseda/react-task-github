/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { expect } from 'chai';

describe('Registration account', () => {
  it('visiting Registration page', () => {
    cy.visit('http://localhost:3000/regist');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
  });
  it('after registration we will check exist of previous email and password', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
  });
  it('try to delete account', () => {
    cy.visit('http://localhost:3000/profile');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
    cy.get('#forCypress').click();
  });
});
