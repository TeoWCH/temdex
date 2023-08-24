pipeline {
    agent any
    stages {
        stage('Unify Office Integration') {
            steps {
                echo 'Unify Office Integration'
                def response = httpRequest 'https://hooks.unifyoffice.com/webhook/v2/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvdCI6ImMiLCJvaSI6IjExMjU4OTk5MDcyMjc2NDkiLCJpZCI6IjExMjU5MDAzMzg4OTY5MjMifQ.txL1ek7PjNcw0M-ymMsZmJQg-76yYYHw2AVbm0T9fK4'
                println('Status: '+response.status)
            }
        }
    }
}