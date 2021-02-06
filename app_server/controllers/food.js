/* Get home page. */
const foodlist = function(req, res) {
    res.render('foodlist', { title: 'Food list' });
};

const myfavouriteFood = function(req, res) {
    res.render('myfavourite-food', { title: 'My favourite food' });
};

module.exports = {
    foodlist,
    myfavouriteFood
};