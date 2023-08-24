pipeline {
    agent any
    stages {
        stage('Unify Office Integration') {
            steps {
                echo 'Unify Office Integration'

                script {
                    // create payload
                    patchOrg = """
                        {
                            "activity": "Force Alerts",
                            "iconUri": "https://example.com/force.png",
                            "title": "1 force alert",
                            "text": "Be mindful of the force",
                            "attachments": [
                                {
                                "type": "Card",
                                "fallback": "Something bad happened",
                                "color": "#00ff2a",
                                "intro": "There was a disturbance in the force.",
                                "author": {
                                    "name": "Ben Kenobi",
                                    "uri": "https://en.wikipedia.org/wiki/Obi-Wan_Kenobi",
                                    "iconUri": "https://imgur.com/eaL6deH"
                                },
                                "title": "I felt something...",
                                "body": "...as if millions of voices suddenly cried out in terror and were suddenly silenced.",
                                "fields": [
                                    {
                                    "title": "Where",
                                    "value": "Alderaan",
                                    "style": "Short"
                                    },
                                    {
                                    "title": "What",
                                    "value": "Giant explosion",
                                    "style": "Short"
                                    }
                                ]
                                }
                            ]
                        }
                    """
                }
                httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON',
                           httpMode: 'PATCH', requestBody: patchOrg,
                           url: "https://hooks.unifyoffice.com/webhook/v2/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvdCI6ImMiLCJvaSI6IjExMjU4OTk5MDcyMjc2NDkiLCJpZCI6IjExMjU5MDAzMzg4OTY5MjMifQ.txL1ek7PjNcw0M-ymMsZmJQg-76yYYHw2AVbm0T9fK4"

            }
        }
    }
}