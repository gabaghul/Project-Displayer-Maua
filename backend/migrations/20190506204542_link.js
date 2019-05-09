
exports.up = function(knex, Promise) {
    return knex.schema.createTable('link', table => {
        table.increments('id').primary()
        table.string('descricao').notNull()
        table.string('endereco', 2048).notNull()
        table.integer('idIc').notNull()
        table.foreign('idIc').references('iniciacao.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('link')
};
