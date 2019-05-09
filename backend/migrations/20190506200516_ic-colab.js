
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ic-colab', table => {
        table.integer('idIc').notNull()
        table.integer('idColab').notNull()
        table.foreign('idIc').references('iniciacao.id')
        table.foreign('idColab').references('colaborador.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.dropTable('ic-colab')
};
