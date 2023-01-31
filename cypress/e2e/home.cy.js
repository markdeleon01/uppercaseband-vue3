// https://docs.cypress.io/api/introduction/api.html

describe('Test the home page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'U P P E R C A S E')
  })
})
