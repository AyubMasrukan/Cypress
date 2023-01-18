describe('Login', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('#username').type("tomsmith")

      cy.get('#password').type("SuperSecretPassword!")

      cy.get('.radius').click()
    })

  })


  describe('Login', () => {

    it('input invalid username dan password then Login', () => {

      cy.visit('https://the-internet.herokuapp.com/login')

      cy.get('#username').type("ayub")

      cy.get('#password').type("SuperSecretPassword!")

      cy.get('.radius').click()

      cy.get('#flash')
    })

  })
