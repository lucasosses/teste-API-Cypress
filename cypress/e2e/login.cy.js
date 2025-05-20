/// <reference types="cypress" />

describe('Deve realizar o login com sucesso', () => {
  it('login', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: "beltrano@qa.com.br",
        password: "teste"
      }
    }).should((response) => {
      expect(response.body.message).to.equal('Login realizado com sucesso')
      expect(response.status).to.equal(200)
    })
  })
})
