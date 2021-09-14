describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://ironfish.network/')
  
      cy.contains('About Us')
    })
  })