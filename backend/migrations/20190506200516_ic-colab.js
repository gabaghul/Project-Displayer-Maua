
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ic_colab', table => {
        table.integer('id_ic').notNull()
        table.integer('id_colab').notNull()
        table.foreign('id_ic').references('iniciacao.id').onDelete('cascade')
        table.foreign('id_colab').references('colaborador.id').onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ic_colab')
};
