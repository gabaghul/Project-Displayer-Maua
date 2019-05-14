module.exports = middleware => {
    const admin = (req, res, next) => {
        if(req.user.status && req.user.status === "admin") {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador.')
        }
    }

    const prof = (req, res, next) => {
        if(req.user.status && (req.user.status === "prof" || req.user.status === "admin")) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é professor.')
        }
    }

    const colab = (req, res, next) => {
        if(req.user.status && (req.user.status === "colab" 
            || req.user.status === "prof" || req.user.status === "admin")) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é colaborador.')
        }
    }

    return { admin, prof, colab }
}