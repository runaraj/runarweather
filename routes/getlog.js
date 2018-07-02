var express = require('express');
var router = express.Router();
var path = require('path');
var storage = require('azure-storage');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  };
  
  
  var blobService = storage.createBlobService();
  var containerName = "log-container";
  var logFilePath = path.resolve('./access.log');
  var blobName = path.basename(logFilePath, path.extname(logFilePath));


const download = () => {
    const dowloadFilePath = logFilePath.replace('.log', '.downloaded.log');
    return new Promise((resolve, reject) => {
        blobService.getBlobToLocalFile(containerName, blobName, dowloadFilePath, err => {
            if(err) {
                reject(err);
            } else {
                console.log("funkafett");
                resolve({ message: `Download of '${blobName}' complete` });
            }
        });
    });
};


router.get('/left', function(req, res, next) {
    console.log(download());
    res.sendFile(path.join(__dirname + '/../access.downloaded.log'));

    
});

// TODO make this download the logfile, then res.sendFile the downloaded file

router.get('/', function(req, res, next) {
    const dowloadFilePath = logFilePath.replace('.log', '.downloaded.log');
    new Promise((resolve, reject) => {
        blobService.getBlobToLocalFile(containerName, blobName, dowloadFilePath, err => {
            if(err) {
                reject(err);
            } else {
                res.sendFile(path.join(__dirname + '/../access.downloaded.log'));
                resolve({ message: `Download of '${blobName}' complete` });
            }
        });
        
    });
    
});
module.exports = router;