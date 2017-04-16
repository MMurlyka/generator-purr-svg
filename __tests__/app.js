'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-purr-svg:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'filename.svg'});
  });

  it('creates files', () => {
    assert.file([
      'filename.svg'
    ]);
  });
});
