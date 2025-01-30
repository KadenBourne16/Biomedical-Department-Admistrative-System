const express = require("express")
const router = express.Router()
const authenticationcontroller  = require('../controller/authenticationcontroller')
router.get('/', authenticationcontroller.registerStudent)


module.exports = {
    router
}