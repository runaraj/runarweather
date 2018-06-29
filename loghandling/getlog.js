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
                resolve({ message: `Download of '${blobName}' complete` });
            }
        });
    });
};


router.get('/', function(req, res, next) {
    download();
    console.log("downloaded logs");
});
module.exports = router;