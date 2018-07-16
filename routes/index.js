var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.sendFile(path.join(__dirname+'/client/build/index.html'));
  res.json({
  	hello: "this",
  	is: "home"
  });
});

module.exports = router;
