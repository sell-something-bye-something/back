const express = require('express')
const router = express.Router()
const userControl = require('../controllors/user')


router.post('/login', userControl.signIn)

router.post('/signup'  , userControl.signUp)

module.exports = router

