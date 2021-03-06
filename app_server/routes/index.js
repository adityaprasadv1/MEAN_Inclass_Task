var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', ctrlFood.homelist);
router.get('/foods/:foodid', ctrlFood.foodInfo);

module.exports = router;
