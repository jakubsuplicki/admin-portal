const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        }
    });
    // adding direct method to hash the password before saving the user
    User.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.dataValues.password, 10);
        user.dataValues.password = hashedPassword;
    })
    // adding method to validate password
    User.prototype.isValidPassword = async (password, user) => {
        return await bcrypt.compare(password, user.dataValues.password);
    }
    return User;
};