var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('bio', {
        title: 'Johns Biography',
        name: 'John',
        zipcode: '76001'
    });
});

module.exports = router;