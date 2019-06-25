
exports.up = function(knex, Promise) {
    return knex.schema.createTable('link', table => {
        table.increments('id').primary()
        table.string('descricao').notNull()
        table.string('endereco', 2048).notNull()
        table.integer('id_ic').notNull()
        table.foreign('id_ic').references('iniciacao.id').onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('link')
};
