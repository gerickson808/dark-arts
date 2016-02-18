'use strict';

var express = require('express'),
	router = express.Router(),
	path = require('path');

var rootPath = path.join(__dirname, '..', '..');


var browserPath = path.join(rootPath, '/browser/');
var publicPath = path.join(rootPath, 'public');
var bowerPath = path.join(rootPath, 'bower_components');
var nodePath = path.join(rootPath, 'node_modules');

router.use(express.static(publicPath));

router.use('/browser/', express.static(browserPath));

router.use('/bower_components/', express.static(bowerPath));

// router.use(express.static(rootPath));

module.exports = router;