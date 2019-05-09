const bodyParser = require('body-parser')
const cors = require('cors')

// Declarado dessa forma para o consign aplicar as dependencias em app (express), que é o principal.
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}