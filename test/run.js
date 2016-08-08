'use strict';

var path = require('path');
var sassTrue = require('sass-true');

// Test Files
var fontSize = path.join(__dirname, '_tools.font-size.scss');
var rem = path.join(__dirname, '_tools.rem.scss');
var widths = path.join(__dirname, '_utilities.widths.scss');

// Run Tests
sassTrue.runSass({ file: fontSize }, describe, it);
sassTrue.runSass({ file: rem }, describe, it);
sassTrue.runSass({ file: widths }, describe, it);
