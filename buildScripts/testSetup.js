// Thid isn't transpiled, so must use CommonJA and ES6

// Register babel to transpile before our tests run. 
require('babel-register')();

// Disable webpack features that Mocha doesn't underestand
require.extensions['.css'] = function() {};
