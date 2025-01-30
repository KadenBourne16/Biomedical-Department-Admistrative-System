const express = require("express")
const router = express.Router();
const authenticationcontroller  = require('../controller/authenticationcontroller')

router.get('/signupstudent', authenticationcontroller.registerStudent)


module.exports = {
    router
}