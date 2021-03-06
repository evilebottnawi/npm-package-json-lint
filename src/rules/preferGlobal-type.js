'use strict';

const LintIssue = require('./../LintIssue');
const isBoolean = require('./../validators/type').isBoolean;
const lintId = 'preferGlobal-type';
const nodeName = 'preferGlobal';
const message = 'Type should be a boolean';
const ruleType = 'standard';

const lint = function(packageJsonData, severity) {
  if (!isBoolean(packageJsonData, nodeName)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;
