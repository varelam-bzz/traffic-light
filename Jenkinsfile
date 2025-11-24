pipeline {
    agent any
    tools {nodejs 'node'}
    stages {
        stage('Checkout') {
            steps {
                // Replace the URL with your GitHub repository URL
                git branch: 'main', url: 'https://github.com/varelam-bzz/traffic-light.git'
            }
        }

        stage('Install jest-cli') {
            steps {
                // Install jest-cli globally
                sh 'npm install -g jest-cli'
            }
        }
        
        stage('Install dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
    }
}