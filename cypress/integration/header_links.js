describe('Headers Links', () => {
    it('Validate "Get Started" header link', () => {
      cy.visit('https://ironfish.network/')
      cy.get('a.navbar__item').contains('Get started').click()
      cy.url().should('include', 'docs/onboarding/iron-fish-tutorial')
    })
  })