/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // promise constructor: new Promise ((resolve, reject) => {})
  // if successful case
    // resolve(whatever data you want to pass to "then")
  // if failure case
    // reject(err, or whatever you want to pass to catch block)
    
  var promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (!err) {
        var lines = data.toString().split('\n');
        resolve(lines[0]);
      } else {
        reject(err);
      }
    });

  });
  
  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response) => {
      if (response) {
        resolve(response.statusCode);
      } else {
        reject(err);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
