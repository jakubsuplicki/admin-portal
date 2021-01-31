const jwt = require('jsonwebtoken');
const {
    errorHandler
} = require('../helpers/errorHandler')
module.exports = {
    signUp: async(req, res) => {
        try {
            res.send('Your account has been created successfully.')
        } catch(e) {
            errorHandler(e, res)
        }
    },
    login: async(req, res) => {
        try {
            //set the token and send back to client
            const body = { id: req.user.dataValues.id, email: req.user.dataValues.email };
            const token = jwt.sign({ user: body }, 'SECRET_KEY');
            return res.send({ token });
        } catch(e) {
            errorHandler(e, res)
        }
    },
}