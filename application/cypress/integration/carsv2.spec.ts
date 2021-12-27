/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { expect } from 'chai';

describe('another script', () => {
  it('registration with exist data', () => {
    /* if you will to visit another page, you will be redirect to registration page */
    cy.visit('http://localhost:3000/cars');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
    /* visit page cart */
    cy.get(':nth-child(4) > a').click();
    /* you will see empty cart */
    /* just because you wasn t registered earlier your order history would be empty */
    cy.get(':nth-child(3) > .EmptyCart_link__1vqGB').click();
    /* visit page cart */
    cy.get(':nth-child(4) > a').click();
    /* if you click start shopping you will be redirected to Cars page */
    cy.get(':nth-child(2) > .EmptyCart_link__1vqGB').click();
  });
});
