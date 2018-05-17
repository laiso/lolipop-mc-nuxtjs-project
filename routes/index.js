var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var ev = req.app.get('express-version');

    res.render('index', {
        title: 'Express',
        nodeVersion: process.version,
        expressVersion: ev,
        hostname: require('os').hostname()
    });
});

module.exports = router;
