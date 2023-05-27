const router = require('express').Router();
const {getBill} = require("../contoller/appController.js")
router.post('/product/getBill',getBill)

module.exports = router