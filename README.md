## Testes de API - Produtos (Cypress)

Este projeto realiza testes automatizados da API de produtos utilizando o Cypress. Os testes incluem validação de contrato, operações CRUD (criar, ler, atualizar, deletar) e verificação de mensagens de erro.

#### Pré-requisitos

    - Node.js instalado

    - Cypress instalado (npm install cypress)

    - Dependência do Joi (para contratos): npm install joi

#### Estrutura

    contratos/produtos.contratos.js: Define o schema de validação da resposta da API usando Joi

    commands.js: Contém comandos customizados como token e cadastrarProduto

##### Executando os testes

```bash
npx cypress open
```

###### Ou no modo headless:

```bash 
npx cypress run
``` 

### Testes inclusos

    ✅ Validação de contrato da rota GET /produtos

    ✅ Listagem de produtos (GET)

    ✅ Cadastro de novo produto (POST)

    ✅ Erro ao cadastrar produto duplicado

    ✅ Edição de produto (PUT)

    ✅ Exclusão de produto (DELETE)

##### Desenvolvido por Lucas Osses - 
#### 📦 Por um QA em evolução, rumo à excelência.