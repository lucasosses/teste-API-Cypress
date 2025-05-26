/// <reference types="cypress"/>

describe('Teste de API em Produtos', () => {

    let token
    beforeEach(() => {
        cy.token('teste_86038@teste.com', 'teste').then(tkn => {
            token = tkn
        })
    });

    it('Deve listar produtos com sucesso - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    });

    it('Deve cadastrar produto com sucesso - POST', () => {
        let produto = 'Notebook ' + Math.floor(Math.random() * 10000000)
        cy.cadastrarProduto(token, produto, 3450, "Notebook", 5).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })
    });

    it('Deve validar mensgem de produto já cadastrado - POST', () => {
        cy.cadastrarProduto(token, 'Acer Aspire ES 25', 3450, "Notebook", 5)
            .should((response) => {
                expect(response.status).equal(400)
                expect(response.body.message).equal('Já existe produto com esse nome')
            })
    });

    it('Deve editar produto com sucesso - PUT', () => {
        let produto = 'Notebook editado' + Math.floor(Math.random() * 10000000)
        cy.cadastrarProduto(token, produto, 3450, "Notebook editado", 5)
            .then(response => {
                let id = response.body._id
                cy.request({
            method: 'PUT',
            url: `produtos/${id}`,
            headers: { authorization: token },
            body: {
                "nome": produto,
                "preco": 5499,
                "descricao": "Notebook Master",
                "quantidade": 3
            }

        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body.message).to.equal('Registro alterado com sucesso')
        })
            })
        
    });

    it('Deve deletar um produto - DELETE', () => {
        let produto = 'Notebook editado' + Math.floor(Math.random() * 10000000)
        cy.cadastrarProduto(token, produto, 3450, "Notebook editado", 5)
        .then(response => {
            let id = response.body._id
            cy.request({
            method: 'DELETE',
            url: `produtos/${id}`,
            headers: { authorization: token }
            })
            .should(resp => {
                expect(resp.body.message).to.equal('Registro excluído com sucesso')
                expect(resp.status).equal(200)
            })
        })
    })

})