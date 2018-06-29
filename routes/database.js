var express = require('express');
var router = express.Router();
var dburl = "mongodb://runarweather-db:zT6GJ40hdMiCqwqGixOACIgjLR4L0Bs6pMjUPDMsCWo3agN4hixxNeeGHxrA7bNPBHZk7afKpusZD76IGTmXug%3D%3D@runarweather-db.documents.azure.com:10255/?ssl=true";
var mongoClient = require("mongodb").MongoClient;

var blobber = require('../loghandling/logger.js');

router.get('/', function(req, res, next) {
    res.send("This is the database thingy");
});

router.get('/insertrandom', function(req, res, next) {
    mongoClient.connect(dburl, function (err, client) {
        var db = client.db("testrando");
        var rando = {name: "randoman", type:"randy"};
        db.collection("randoms").insertOne( rando, function(err, res) {
            if (err) throw err;
            console.log("inserted rando");

        });
        client.close();
      });
      blobber();
      
});

router.post('/insertcomment', function(req, res, next) {
    mongoClient.connect(dburl, function (err, client) {
        var db = client.db("runarweather");
        db.collection("comments").insertOne( req.body, function(err, res) {
            if (err) throw err;
            console.log("inserted comment");
        });
        client.close();
      });
    res.json({message: "insertofied"});
});

router.get('/getcomment/:comment_text', function(req, res, next) {
    mongoClient.connect(dburl, function (err, client) {
        var db = client.db("runarweather");
        db.collection("comments").findOne({text: req.params.comment_text}, function(err, result) {
            console.log(result);
        });
        client.close();
        });
        blobber();
    
    // res.json({message: "getified"});
});

//Get all comments for :selected_location
router.get('/getcomments/:selected_location', function(req, res, next) {
    mongoClient.connect(dburl, function (err, client) {
        var db = client.db("runarweather");
        db.collection("comments").find({location: req.params.selected_location}).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
        });
        client.close();
        });
        blobber();
});


module.exports = router;