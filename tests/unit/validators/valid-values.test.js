'use strict';

const chai = require('chai');
const validValuesObj = require('./../../../src/validators/valid-values');

const should = chai.should();

describe('value-values Unit Tests', function() {
  describe('isValidValue method', function() {
    const packageJson = {
      author: 'Malcolm Reynolds'
    };

    context('when the node does not exist in the package.json file', function() {
      it('true should be returned', function() {
        const validValues = [
          'Zoe Washburn',
          'Hoban Washburn',
          'Inara Serra',
          'Jayne Cobb',
          'Kaylee Frye',
          'Simon Tam',
          'River Tam'
        ];
        const response = validValuesObj.isValidValue(packageJson, 'authors', packageJson.author, validValues);

        response.should.be.true;
      });
    });

    context('when the node exists in the package.json file and the value is valid', function() {
      it('true should be returned', function() {
        const validValues = [
          'Malcolm Reynolds',
          'Zoe Washburn',
          'Hoban Washburn',
          'Inara Serra',
          'Jayne Cobb',
          'Kaylee Frye',
          'Simon Tam',
          'River Tam'
        ];
        const response = validValuesObj.isValidValue(packageJson, 'author', packageJson.author, validValues);

        response.should.be.true;
      });
    });

    context('when the node exists in the package.json file, but the value is invalid', function() {
      it('false should be returned', function() {
        const validValues = [
          'Zoe Washburn',
          'Hoban Washburn',
          'Inara Serra',
          'Jayne Cobb',
          'Kaylee Frye',
          'Simon Tam',
          'River Tam'
        ];
        const response = validValuesObj.isValidValue(packageJson, 'author', packageJson.author, validValues);

        response.should.be.false;
      });
    });
  });

  describe('matchValidValue method', function() {
    const packageJson = {
      name: '@lerna/publish'
    };

    context('when the node does not exist in the package.json file', function() {
      it('true should be returned', function() {
        const validRegexes = [
          /^@babel\//,
          /run$/,
          /[0-9]+/
        ];
        const response = validValuesObj.matchValidValue(packageJson, 'names', packageJson.name, validRegexes);

        response.should.be.true;
      });
    });

    context('when the node exists in the package.json file and the value matches', function() {
      it('true should be returned', function() {
        const validRegexes = [
          /^@lerna\//,
          /^@babel\//,
          /run$/,
          /[0-9]+/
        ];
        const response = validValuesObj.matchValidValue(packageJson, 'name', packageJson.name, validRegexes);

        response.should.be.true;
      });
    });

    context('when the node exists in the package.json file, but the value does not match', function() {
      it('false should be returned', function() {
        const validRegexes = [
          /^@babel\//,
          /run$/,
          /[0-9]+/
        ];
        const response = validValuesObj.matchValidValue(packageJson, 'name', packageJson.name, validRegexes);

        response.should.be.false;
      });
    });
  });
});
