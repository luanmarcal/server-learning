const UserSchema = require('../models/Users')
const user = 'luan';
const pass = '123';

const auth = (req, res, next) => {

    UserSchema.findOne({'username': req.header('username')})
    .then(user => {
        if(req.header('password') != user.password) {
            return res.status(401).send("ALGO DE ERRADO NÃO ESTA CERTO")
        }
        console.log(user)
        next();
    })
    .catch(err => {
        res.status(404).send("USUARIO ERRADO");
    })
}

module.exports = auth;

