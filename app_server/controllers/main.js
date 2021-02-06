/* Get home page. */
const index = function(req, res) {
    res.render('index', { title: 'Aditya Venkatesh Prasad' });
};

module.exports = {
    index
};