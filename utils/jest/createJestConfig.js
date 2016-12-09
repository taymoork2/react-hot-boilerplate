/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Note: this file does not exist after ejecting.

const pathExists = require('path-exists');
const paths = require('../paths');

module.exports = (resolve, rootDir, isEjecting) => {
  // Use this instead of `paths.testsSetup` to avoid putting
  // an absolute filename into configuration after ejecting.
  const setupTestsFile = pathExists.sync(paths.testsSetup) ? '<rootDir>/src/setupTests.js' : undefined;

  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  const config = {
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    setupFiles: [resolve('../polyfills.js')],
    setupTestFrameworkScriptFile: setupTestsFile,
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|dist|docs|node_modules)[/\\\\]'
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
      '^.+\\.css$': resolve('./cssTransform.js'),
      '^(?!.*\\.(js|jsx|css|json)$)': resolve('./fileTransform.js'),
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
    ],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    }
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }
  return config;
};
