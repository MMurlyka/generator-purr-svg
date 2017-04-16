'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the phenomenal ' + chalk.red('generator-purr-svg') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'name?'
    }, {
      type: 'input',
      name: 'title',
      message: 'Title?'
    }, {
      type: 'input',
      name: 'desc',
      message: 'Description?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_template.svg'),
      this.destinationPath(this.props.name),
      this.props
    );
  }
});
