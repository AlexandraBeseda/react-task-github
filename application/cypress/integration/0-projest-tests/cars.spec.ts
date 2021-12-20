/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />
import { expect } from 'chai';

describe('add cars into cart', () => {
  it('registration with exist data', () => {
    cy.visit('http://localhost:3000/regist');
    cy.get('input[type=email]')
      .type('pararam862111@gmail.com')
      .should('have.value', 'pararam862111@gmail.com');
    cy.get('input[type=password]')
      .type('123456790')
      .should('have.value', '123456790');
    cy.get('button[type=submit]').click();
    /* visit page Cars */
    cy.get(':nth-child(3) > a').click();
    /* add one (first) car */

    cy.get(':nth-child(1) > :nth-child(3) > .Car_addButton__LMxOo').click();
    /* when you click twice one buttonyou will get message */
    cy.get(':nth-child(1) > :nth-child(3) > .Car_addButton__LMxOo').click();
    cy.get(':nth-child(1) > :nth-child(3) > .Car_message__2WA1F').should(
      'have.text',
      'You have already added this car.'
    );
    /* adding one more car to the cart */
    cy.get(':nth-child(2) > :nth-child(3) > .Car_addButton__LMxOo').click();
    /* go to Cart */
    cy.get(':nth-child(4) > a').click();
    /* value of inputs type number should be 1 */
    cy.get(':nth-child(2) > .CarInCart_input__2ywoy').should('have.value', '1');
    /* input type number to increase (first car input) */
    cy.get(':nth-child(2) > .CarInCart_input__2ywoy').type('{uparrow}');
    cy.get(':nth-child(2) > .CarInCart_input__2ywoy').type('{uparrow}');
    /* click button delete second car */
    cy.get(':nth-child(3) > .undefined > .svg-inline--fa').click();
    /* fill form */
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
    /* create order */
    cy.get(':nth-child(9) > button').click();
    /* view order history */
    cy.get('.CartFormHeader_link__RimOt').click();
    /* change language to Ru */
    cy.get('.NavBar_menu__3YfQK > :nth-child(2)').click();
    /* delete account */
    cy.get('#forCypress').click();
  });
});
