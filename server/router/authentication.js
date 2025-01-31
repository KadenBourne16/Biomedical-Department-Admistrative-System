const express = require("express");
const router = express.Router();
const authenticationcontroller = require("../controller/student/signupauthentication/authenticationcontroller_student.js");
const { signuplecturer } = require("../controller/lecturer/lecturer.auth.signup.controller.js");

router.post('/signupstudent', authenticationcontroller.signupstudent);
router.post('/signuplecturer', signuplecturer);

module.exports = router; // Export the router directly