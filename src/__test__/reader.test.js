'use strict';

const reader = require('../lib/reader');


describe('Reading from text files', () => {
  test('Success', (done) => {
    reader.readAsync(`${__dirname}/../data/fileOne.txt`, 5, (data) => {
      expect(data).toEqual('Stuff');
      done();
    });
  });
  test('Error on wrong filepath', (done) => {
    reader.readAsync('/data/fileOne.txt', 5, (error) => {
      expect(error.code).toEqual('ENOENT');
      done();
    });
  });
});
