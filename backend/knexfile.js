// Update with your config settings.
const { db } = require('./.env')

module.exports = {
  client: 'postgresql',
  connection: db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

// No console:
//    knex migrate:latest <- para executar as ultimas migrations pelo exports.up
//    knex migrate:rollback <- para executar as ultimas migrations pelo exports.down

