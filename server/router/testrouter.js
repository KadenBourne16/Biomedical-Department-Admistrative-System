const express = require("express");
const router = express.Router();
const testController = require('../controller/test/testcontroller.js')

router.get('/test', testController.testController);
router.post('/testing', testController.try)


module.exports = router;