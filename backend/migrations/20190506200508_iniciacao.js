
exports.up = function(knex, Promise) {
    return knex.schema.createTable('iniciacao', table => {
        table.increments('id').primary()
        table.string('titulo', 50).notNull().unique()
        table.text('conteudo').notNull()
        table.string('imgUrl', 2048)
        table.string('responsavel', 40).notNull()
        table.integer('id_area').notNull()
        table.foreign('id_area').references('area.id').onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('iniciacao')
};
