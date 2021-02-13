/* Get home page. */
const foodlist = function(req, res) {
    let foodArray = [{
        name: "Dosa",
        type: "Breakfast"
    },
    {
        name: "Poutine",
        type: "Lunch"
    },
    {
        name: "Biryani",
        type: "Dinner"
    }];
    
    res.render('foodlist', { foods: foodArray });
};

const myfavouriteFood = function(req, res) {
    const myFavFood = "Poutine";
    res.render('myfavourite-food', { food: myFavFood });
};

module.exports = {
    foodlist,
    myfavouriteFood
};