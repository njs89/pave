const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 8000

app.use(bodyParser.json());
app.use(express.static('../simple-react/build/'))

app.get('/login', (request, response) => {
    response.status(202)
    response.send('Hello World!')
})

app.post('/hello', (request, response) => {
    const { name, pass } = request.query
    const username = request.body.username
    const password = request.body.password
    response.status(200)
    response.send(`${username} with pass ${password} and ${name} with pass ${pass}`)
})

app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
})
