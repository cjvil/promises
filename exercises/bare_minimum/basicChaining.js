/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseConstructor = require('./promiseConstructor.js');
var promisification = require('./promisification.js');

var writeToFileAsync = (writeFilePath, body) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(writeFilePath, body, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
};

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // use promise for pluckfirstlinefromfile
  // then (firstLine)
    // fetch/get profile from api: getGitHubProfileAsync (firstLine)
      // then (body)
        // return body
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((firstLine) => {
      return promisification.getGitHubProfileAsync(firstLine);
    }).then((body) => {
      return writeToFileAsync(writeFilePath, JSON.stringify(body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
