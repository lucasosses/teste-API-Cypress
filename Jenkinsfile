pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // Certifique-se que esta ferramenta está configurada em "Gerenciar Jenkins"
    }

    environment {
        HOME = '/var/jenkins_home' // Corrige problemas de cache do Cypress
    }

    stages {
        stage('Clonar repositório') {
            steps {
                git 'https://github.com/lucasosses/teste-API-Cypress.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
                sh 'npx cypress install' // Garante que o binário seja baixado
            }
        }

        stage('Executar testes Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Salva vídeos e screenshots gerados, caso algum teste falhe
            archiveArtifacts artifacts: '**/cypress/videos/**/*', allowEmptyArchive: true
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*', allowEmptyArchive: true
        }
        failure {
            echo 'Algum teste falhou. Verifique os artefatos para detalhes.'
        }
    }
}
