const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body } // Refatorar descrevendo os campos para maior segurança
        if (req.params.id) user.id = req.params.id

        // if(!req.originalUrl.startsWith('/users')) user.admin = false
        // if(!req.user || !req.admin.admin) user.admin = false

        try {
            existsOrError(user.nome, 'Nome não informado!')
            existsOrError(user.telefone, 'Telefone não informado!')
            existsOrError(user.email, 'Email não informado!')
            existsOrError(user.password, 'Senha não informada!')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida!')
            existsOrError(user.status, 'Tipo de usuário não informado!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem!')

            const userFromDB = await app.db('colaborador')
                .where({ email: user.email }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado!')
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('colaborador')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('colaborador')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('colaborador')
            .select('*')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('colaborador')
            .select('*')
            .where({ id: req.params.id }).first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('colaborador')
            .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Usuário não foi encontrado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}