const express = require("express");
const router = express.Router();
const authenticationcontroller = require("../controller/student/signupauthentication/authenticationcontroller_student.js");

router.post('/signupstudent', authenticationcontroller.signupstudent);

module.exports = router; // Export the router directly