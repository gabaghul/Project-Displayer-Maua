
exports.up = function(knex, Promise) {
    return knex.schema.createTable('colaborador', table => {
        table.increments('id').primary()
        table.string('nome', 40).notNull()
        table.string('telefone', 15).notNull()
        table.string('email', 30).notNull().unique()
        table.string('password').notNull()
        table.enu('status', ['prof', 'admin', 'colab']).notNull()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('colaborador')
};
