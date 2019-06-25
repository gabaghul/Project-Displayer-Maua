module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const relacao = { ...req.body }
        try {

            existsOrError(relacao.id_ic, 'Relação com IC não informada!')
            existsOrError(relacao.id_colab, 'Relação com colaborador não informada!')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('ic_colab')
            .insert(relacao)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        if(req.body.id_ic && req.body.id_colab) {
            app.db('ic_colab')
                .select('*')
                .where({ id_ic: req.body.id_ic })
                .where({ id_colab: req.body.id_colab })
                .then(relacoes => res.json(relacoes))
                .catch(err => res.status(500).send(err))
        } else {
            if(req.body.id_colab){
                app.db('ic_colab')
                .select('*')
                .where({ id_colab: req.body.id_colab })
                .then(relacoes => res.json(relacoes))
                .catch(err => res.status(500).send(err))
            } else {
                if(req.body.id_ic){
                    app.db('ic_colab')
                    .select('*')
                    .where({ id_ic: req.body.id_ic })
                    .then(relacoes => res.json(relacoes))
                    .catch(err => res.status(500).send(err))
                } else {
                    app.db('ic_colab')
                        .select('*')
                        .then(relacoes => res.json(relacoes))
                        .catch(err => res.status(500).send(err))
                }
            }
        }
    }

    return { save, get }
}