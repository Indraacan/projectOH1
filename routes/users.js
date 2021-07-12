var express = require('express');
var router = express.Router();

const userControler = require ("../controller/user")

router.get('/get', userControler.getAllData)

module.exports = router;
