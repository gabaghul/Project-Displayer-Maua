module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) => {
        const iniciacao = { ...req.body }

        if(req.params.id) iniciacao.id = req.params.id

        try {
            existsOrError(iniciacao.titulo, 'Título não informado!')
            existsOrError(iniciacao.conteudo, 'Conteúdo não informado!')
            existsOrError(iniciacao.responsavel, 'Responsável não informado!')
            existsOrError(iniciacao.idArea, 'Área não especificada!')

            const researchFromDB = await app.db('iniciacao')
                .where({ titulo: iniciacao.titulo }).first()
            if (!iniciacao.id) {
                notExistsOrError(researchFromDB, 'Pesquisa já cadastrada!')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if (category.id) {
            app.db('iniciacao')
                .update(iniciacao)
                .where({ id: iniciacao.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('iniciacao')
                .insert(iniciacao)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('iniciacao')
            .then(iniciacoes = res.json(iniciacoes))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('iniciacao')
            .where({ id: req.params.id }).first()
            .then(iniciacao => res.json(iniciacao))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('iniciacao')
            .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Pesquisa não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { get, getById, save, remove }
}