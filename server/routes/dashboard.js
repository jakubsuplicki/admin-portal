const express = require('express')
const router = new express.Router()
const dashboardController = require('../controllers/dashboard')

router.get('/get-users', dashboardController.getUsers)

module.exports = router