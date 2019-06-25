const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign() // Funciona de forma serial, definindo o arquivo literalmente você garante sequencia nos carregamentos
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api/')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando ...')
})