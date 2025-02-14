const express = require('express')
const router = express.Router()
const newsController = require('../controller/headofdepartment/newscontroller.js')

router.post("/addnews", newsController.addNews)

module.exports = router;