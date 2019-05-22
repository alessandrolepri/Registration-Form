const router = require('express').Router()


// const secureRoute = require('../lib/secureRoute')

const authController = require('../controllers/auth')

// const userController = require('../controllers/users')


router.post('/register', authController.register)

router.post('/login', authController.login)

router.post('/resetpassword/', authController.passwordReset)

router.get('/confirm/:code', authController.confirm)

module.exports = router
