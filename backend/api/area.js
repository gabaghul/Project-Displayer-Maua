module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const area = { ...req.body }
        
        if(req.params.id) area.id = req.params.id
        try {

            existsOrError(area.descricao, 'Descricao não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if(area.id) {
            app.db('area')
                .update(area)
                .where({ id: area.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('area')
                .insert(area)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('area')
            .select('*')
            .then(areas => res.json(areas))
            .catch(err => res.status(500).send(err))
    }
    const getById = (req, res) => {
        app.db('area')
            .select('*')
            .where({ id: req.params.id }).first()
            .then(area => res.json(area))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('area')
            .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Area não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { get, getById, save, remove }
}