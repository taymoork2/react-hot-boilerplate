/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI
if (!process.env.CI) {
  argv.push('--watch');
}


// This is not necessary after eject because we embed config into package.json.
const createJestConfig = require('./jest/createJestConfig');
const path = require('path');
const paths = require('./paths');
argv.push('--config', JSON.stringify(createJestConfig(
  relativePath => path.resolve(__dirname, '..', relativePath),
  path.resolve(paths.appSrc, '..'),
  false
)));

jest.run(argv);
