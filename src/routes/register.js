const express = require('express')
const router = express.Router()

const RegisterController = require('..\\app\\controllers\\RegisterController')



router.get('/create', RegisterController.create)
router.post('/login', RegisterController.login)
router.get('/signin', RegisterController.signin)
router.post('/signin', RegisterController.signin)




module.exports = router