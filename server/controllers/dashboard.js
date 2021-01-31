const {
    errorHandler
} = require('../helpers/errorHandler')
const db = require('../models');
const User = db.users;
module.exports = {
    getUsers: async(req, res) => {
        try {
            const users = await User.findAll({
                attributes: { exclude: ['password'] }
              });
            res.send(users)
        } catch(e) {
            errorHandler(e, res)
        }
    }
}