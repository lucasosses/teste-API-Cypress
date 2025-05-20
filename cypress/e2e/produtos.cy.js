/// <reference types="cypress"/>

describe('Teste de API em Produtos', () => {
    it('Teste de API - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
        
    });
    
});