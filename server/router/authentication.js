const express = require("express");
const router = express.Router();
const authenticationcontroller = require("../controller/student/signupauthentication/authenticationcontroller_student.js");
const { signuplecturer } = require("../controller/lecturer/lecturer.auth.signup.controller.js");
const {loginStudent} =  require('../controller/student/loginauthentication/login.authentication.student.controller.js')


router.post('/signupstudent', authenticationcontroller.signupstudent);
router.post('/signuplecturer', signuplecturer);
router.post('/loginstudent', loginStudent);

module.exports = router; // Export the router directly