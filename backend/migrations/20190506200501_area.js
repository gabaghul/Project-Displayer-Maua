
exports.up = function(knex, Promise) {
    return knex.schema.createTable('area', table => {
        table.increments('id').primary()
        table.string('descricao').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('area')
};
