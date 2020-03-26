const validateBody = (schema) => (req, res, next) => {
    try {
        const body = req.body
        const { error, value } = schema.validate(body)
        if(error) return next(error)
        req.body = value
        next()
    } catch (err) {
        next(err) 
    }
}

module.exports = { validateBody }