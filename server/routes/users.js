const express = require('express')
const router = new express.Router()
const usersController = require('../controllers/users')
const passport = require('passport');
require('../middleware/auth')

router.post('/sign-up', passport.authenticate('signup', { session: false }), 
usersController.signUp)

router.post('/login', passport.authenticate('login', { session: false }), 
usersController.login)

module.exports = router