var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // index is actually "index.jade" and knows to look in the "views" folder is guess
});

module.exports = router;
