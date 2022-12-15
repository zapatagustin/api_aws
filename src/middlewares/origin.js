const checkSession = (req, res, next) => {
    const headerAuth = req.headers.authorization || ''
    console.log(req)
    const token = headerAuth.split(' ').pop()
    if (!token) {
        res.status(405)
        res.send({ error: 'no token'})
    } else {
        next()
    }
}

module.exports = { checkSession }