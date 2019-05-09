module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        try {
            const relacao = { ...req.body }

            existsOrError(relacao.idIc, 'Relação com IC não informada!')
            existsOrError(relacao.idColab, 'Relação com colaborador não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }
        app.db('id-colab')
            .insert(relacao)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const updateByColab = (req, res) => {
        try {
            const relacao = { ...req.body }

            existsOrError(relacao.idIc, 'Relação com IC não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('id-colab')
            .update(relacao)
            .where({ idColab: req.params.idColab })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const updateByIc = (req, res) => {
        try {
            const relacao = { ...req.body }

            existsOrError(relacao.idColab, 'Relação com colaborador não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('id-colab')
            .update(relacao)
            .where({ idIc: req.params.idIc })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('id-colab')
            .select('*')
            .then(relacoes => res.json(relacoes))
            .catch(err => res.status(500).send(err))
    }

    const getByIc = (req, res) => {
        app.db('id-colab')
            .select('*')
            .where({ idIc: req.params.idIc })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(msg))
    }

    const getByColab = (req, res) => {
        app.db('id-colab')
            .select('*')
            .where({ idColab: req.params.idColab })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(msg))
    }

    const removeByIc = async (req, res) => {
        try {
            const rowsDeleted = await app.db('id-colab')
            .where({ idIc: req.params.idIc }).del()
            existsOrError(rowsDeleted, 'Relação não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    const removeByColab = async (req, res) => {
        try {
            const rowsDeleted = await app.db('id-colab')
            .where({ idColab: req.params.idColab }).del()
            existsOrError(rowsDeleted, 'Relação não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getByIc, getByColab, updateByIc, updateByColab, removeByIc, removeByColab }
}