var express = require('express');
var router = express.Router();
var request = require('request');
var convert = require('xml-js');

var blobber = require('../loghandling/logger.js');

router.get('/left', function(req, res, next) {
    console.log(req);
    res.json({ message: 'from da left' });
});

router.get('/:cityname', function(req, res, next) {
    console.log(req.params.cityname);
    var name = req.params.cityname;
    request.get("https://www.yr.no/place/Norway/Rogaland/"+name+"/"+name+"/forecast_hour_by_hour.xml", function(req,result) {
        res.send( convert.xml2json(result.body, {compact:true, ignoreComment:true, spaces: 4}));
    })
    blobber();

});

module.exports = router;