const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // Pode não ser positivo colocar a migração direto no código, 
                              // pois se perde controle das migrations caso necessite que elas subam em momento correto.

module.exports = knex