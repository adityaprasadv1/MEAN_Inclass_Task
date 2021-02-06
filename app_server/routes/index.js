var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/favourite', ctrlFood.myfavouriteFood);
router.get('/list', ctrlFood.foodlist);

module.exports = router;
