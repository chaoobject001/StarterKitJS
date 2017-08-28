// This file is not transpiled - ES 5 only

// Register babel to transpile before test run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// - referring to import statement of index.css in index.js
require.extensions['.css'] = function() {};

