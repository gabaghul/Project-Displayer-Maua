
exports.up = function(knex, Promise) {
    return knex.schema.createTable('iniciacao', table => {
        table.increments('id').primary()
        table.string('titulo', 30).notNull().unique()
        table.text('conteudo').notNull()
        table.string('imgUrl', 2048)
        table.string('responsavel', 40).notNull()
        table.integer('idArea').notNull()
        table.foreign('idArea').references('area.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('iniciacao')
};
