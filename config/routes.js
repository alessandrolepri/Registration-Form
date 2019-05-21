const router = require('express').Router()


const secureRoute = require('../lib/secureRoute')

const authController = require('../controllers/auth')

// const userController = require('../controllers/users')


router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
