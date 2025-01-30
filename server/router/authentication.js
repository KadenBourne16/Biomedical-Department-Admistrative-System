const express = require("express");
const router = express.Router();
const authenticationcontroller = require("../controller/authenticationcontroller.js");

router.post('/signupstudent', authenticationcontroller.signupstudent);

module.exports = router; // Export the router directly