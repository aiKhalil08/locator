var express = require('express');
// const { index } = require('../controllers/main');
var router = express.Router();
const ctrlMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;