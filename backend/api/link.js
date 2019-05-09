module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        try {
            const link = { ...req.body }
            
            if(req.params.id) link.id = req.params.id

            existsOrError(link.descricao, 'Descricao não informada!')
            existsOrError(link.endereco, 'Endereço de link não informado')
            existsOrError(link.idIc, 'Pesquisa não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if(link.id) {
            app.db('link')
                .update(link)
                .where({ id: link.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('link')
                .insert(link)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('link')
            .select('*')
            .then(links => res.json(links))
            .catch(err => res.status(500).send(err))
    }
    const getById = (req, res) => {
        app.db('link')
            .select('*')
            .where({ id: req.params.id }).first()
            .then(link => res.json(link))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('link')
            .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Link não foi encontrado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { get, getById, save, remove }
}