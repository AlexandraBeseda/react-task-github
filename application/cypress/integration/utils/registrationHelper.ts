export const registrationHelper = () => {
  cy.visit('http://localhost:3000/regist');
  cy.get('input[type=email]').type('pararam862111@gmail.com');
  cy.get('input[type=password]').type('123456790');
  cy.get('button[type=submit]').click();
};
