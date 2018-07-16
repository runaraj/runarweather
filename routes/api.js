var express = require('express');
var router = express.Router();
var request = require('request');
var convert = require('xml-js');
var path = require('path');

var blobber = require('../loghandling/logger.js');

router.get('/left', function(req, res, next) {
    console.log(req);
    // res.json({ message: 'from da left' });
    console.log(path.join(__dirname + '/../access.downloaded.log'));
    res.sendFile(path.join(__dirname + '/../access.downloaded.log'));
});

router.get('/:cityname', function(req, res, next) {
    console.log(req.params.cityname);
    var name = req.params.cityname;
    request.get("https://www.yr.no/place/Norway/Rogaland/"+name+"/"+name+"/forecast_hour_by_hour.xml", function(req,result) {
        res.send( convert.xml2json(result.body, {compact:true, ignoreComment:true, spaces: 4}));
        // console.log(result);
    })
    // blobber();

});

module.exports = router;