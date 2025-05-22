/// <reference types="cypress"/>

describe('Teste de API em Produtos', () => {

    let token
    beforeEach(() => {
        cy.token('teste_86038@teste.com', 'teste').then(tkn => {
            token = tkn
        })
    });

    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    });

    it('Cadastrar produtos - POST', () => {
        let produto = 'produto Notebook ' + Math.floor(Math.random() * 10000000)
        cy.cadastrarProduto(token, produto, 3450, "Notebook", 5).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })
    });

    it('Deve validar mensgem de produto já cadastrado', () => {
        cy.cadastrarProduto(token, 'Acer Aspire ES 25', 3450, "Notebook", 5)
        .should((response) => {
            expect(response.status).equal(400)
            expect(response.body.message).equal('Já existe produto com esse nome')
        })
    })

});