'use strict';

const fs = require('fs');

const reader = module.exports = {};

const fileOnePath = '../data/fileOne.txt';
const fileTwoPath = '../data/fileTwo.txt';
const fileThreePath = '../data/fileThree.txt';

const pathsArray = [fileOnePath, fileTwoPath, fileThreePath];

const CHARS_TO_READ = 5;

const printString = (string) => {
  console.log(string);
  console.log('------------------------------------------');
};

reader.readAsync = function (paths, chars, callback) {
  return fs.readFile(paths, (error, data) => {
    if (error) {
      return callback(error);
    }
    return callback(data.toString('utf8', 0, chars));
  });
};

reader.readAsync(pathsArray[0], CHARS_TO_READ, (one) => {
  printString(one);
  reader.readAsync(pathsArray[1], CHARS_TO_READ, (two) => {
    printString(two);
    reader.readAsync(pathsArray[2], CHARS_TO_READ, (three) => {
      printString(three);
    });
  });
});
