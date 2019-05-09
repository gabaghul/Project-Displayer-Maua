// const admin = require('./admin')

module.exports = app => {
    // app.post('/signup', app.api.user.save)
    // app.post('/signin', app.api.auth.signin)
    // app.post('/validateToken', app.api.auth.validateToken)

    app.route('/colab')
        // .all(app.config.passport.authenticate())
        .post(app.api.colaborador.save) // Caminho até a pasta separado por pontos
        .get(app.api.colaborador.get)

    app.route('/colab/:id')
        // .all(app.config.passport.authenticate())
        .get(app.api.colaborador.getById)
        .put(app.api.colaborador.save)
        .delete(app.api.colaborador.remove)
    
    app.route('/iniciacao')        
        // .all(app.config.passport.authenticate())
        .get(app.api.iniciacao.get)
        .post(app.api.iniciacao.save)
    
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
    
    app.route('/ic-colab-idIc/:idIc')
        // .all(app.config.passport.authenticate())
        .get(app.api.icColab.getByIc)
        .put(app.api.icColab.updateByIc)
        .delete(app.api.icColab.removeByIc)

    app.route('/ic-colab-idColab/:idColab')
        // .all(app.config.passport.authenticate())
        .get(app.api.icColab.getByColab)
        .put(app.api.icColab.updateByColab)
        .delete(app.api.icColab.removeByColab)

}