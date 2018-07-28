global.window = global;
global.assert = require("chai").assert;
global.firebase = require('firebase');
require('../src/js/data/dataRedSocial');
require('./dataRedSocial.spec.js');
