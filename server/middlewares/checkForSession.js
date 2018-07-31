module.exports = function (req, res, next) {
    const { session } = req
    console.log('session user', session.user)
    if(!session.user) {
        console.log(111111)
        session.user = {
            username: '',
            cart: [],
            total: 0.00
        }
        return next ()
    }
    return next ()
}