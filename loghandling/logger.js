var path = require('path');
var storage = require('azure-storage');

// LOG STORAGE START
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  };
  
  
  var blobService = storage.createBlobService();
  var containerName = "log-container";
  var logFilePath = path.resolve('./access.log');
  var blobName = path.basename(logFilePath, path.extname(logFilePath));
  
  /* const createContainer = () => {
    return new Promise((resolve, reject) => {
        blobService.createContainerIfNotExists(containerName, { publicAccessLevel: 'blob' }, err => {
            if(err) {
                reject(err);
            } else {
                resolve({ message: `Container '${containerName}' created` });
            }
        });
    });
  }; */
  
  const uploadBlob = () => {
    return new Promise((resolve, reject) => {
        blobService.createBlockBlobFromLocalFile(containerName, blobName, logFilePath, err => {
            if(err) {
                reject(err);
            } else {
                resolve({ message: `Upload of '${blobName}' complete` });
            }
        });
    });
  };
  
  // LOG STORAGE END

module.exports = uploadBlob;