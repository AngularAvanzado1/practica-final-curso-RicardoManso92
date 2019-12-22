import { getGreeting, getNumeroRegiones } from '../support/app.po';

describe('world-bank', () => {
  beforeEach(() => cy.visit('/'));
  context('WHEN: user visits home page', () => {
    it('should display welcome message', () => {
      getGreeting().contains('Regiones Geográficas');
    });
    it('THEN: should display div regions', () => {
      getNumeroRegiones().should('have.length', 1)
    });
  });
});
