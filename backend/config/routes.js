// const admin = require('./admin')
const { admin, prof, colab } = require('./admin')
module.exports = app => {
    app.post('/signup', app.api.colaborador.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/colab')
        // .all(app.config.passport.authenticate())
        .post(app.config.passport.authenticate())
        .post(prof(app.api.colaborador.save)) // Caminho até a pasta separado por pontos
        .get(app.api.colaborador.get)

    app.route('/colab/:id')
        // .all(app.config.passport.authenticate())
        .put(app.config.passport.authenticate())
        .delete(app.config.passport.authenticate())
        .get(app.api.colaborador.getById)
        .put(colab(app.api.colaborador.save))
        .delete(prof(app.api.colaborador.remove))
    
    app.route('/iniciacao')        
        // .all(app.config.passport.authenticate())
        .post(app.config.passport.authenticate())
        .get(app.api.iniciacao.get)
        .post(admin(app.api.iniciacao.save))
    
    app.route('/iniciacao/:id')
        // .all(app.config.passport.authenticate())
        .get(app.api.iniciacao.getById)
        .put(app.api.iniciacao.save)
        .delete(app.api.iniciacao.remove)

    app.route('/area')
        // .all(app.config.passport.authenticate())
        .get(app.api.area.get)
        .post(app.api.area.save)
    
    app.route('/area/:id')
        // .all(app.config.passport.authenticate())
        .get(app.api.area.getById)
        .put(app.api.area.save)
        .delete(app.api.area.remove)

    app.route('/link')
        // .all(app.config.passport.authenticate())
        .get(app.api.link.get)
        .post(app.api.link.save)

    app.route('/link/:id')
        // .all(app.config.passport.authenticate())
        .get(app.api.link.getById)
        .put(app.api.link.save)
        .delete(app.api.link.remove)
    
    app.route('/ic-colab')
        // .all(app.config.passport.authenticate())
        .get(app.api.icColab.get)
        .post(app.api.icColab.save)
}