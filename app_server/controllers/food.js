const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
};
// if (process.env.NODE_ENV === 'production') {
    // apiOptions.server = 'https://.herokuapp.com';
// }

const _renderCreatePage = (req, res) => {
    res.render('create-new-food', {
        title: "Create New Food"
    });
};

const addNewFood = (req, res) => {
    _renderCreatePage(req, res);
};

const doAddNewFood = (req, res) => {
    const path = '/api/foods';
    const postdata = {
        name: req.body.name,
        type: req.body.type
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201) {
                res.redirect('/');
            }
        }
    );
};

const _renderHomepage = (req, res, responseBody) => {
    res.render('foodlist', {
        foods:responseBody
    });
};

const homelist = (req, res) => {
    const path = '/api/foods';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
};

const _renderDetailPage = (req, res, responseBody) => {
    res.render('food-info', {
        currentFood: responseBody
    });
};

const foodInfo = (req, res) => {
    const path = `/api/foods/${req.params.foodid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

module.exports = {
    homelist,
    foodInfo,
    doAddNewFood,
    addNewFood
};