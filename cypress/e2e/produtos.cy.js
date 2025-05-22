/// <reference types="cypress"/>

describe('Teste de API em Produtos', () => {

    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    }),

    it.only('Cadastrar produtos - POST', () => {
        //TODO: Criar token dinamicamente
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbHRyYW5vQHFhLmNvbS5iciIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE3NDc5Mjc1MzgsImV4cCI6MTc0NzkyODEzOH0.pRfm4Pyd3fE31yI_J1WO-UjNL2hS17GMkv2WKYKbOqc"
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers: {authorization: token},
            body: {
                //TODO: Criar produto dinamicamente
                "nome": "Acer Aspire ES 27",
                "preco": 3549,
                "descricao": "Notebook",
                "quantidade": 5
            }
        }).should((response) => {
                expect(response.status).equal(201)
                expect(response.body.message).equal('Cadastro realizado com sucesso')
            })
    })

});