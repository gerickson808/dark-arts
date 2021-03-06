'use strict'; 

var router = require('express').Router(),
	session = require('express-session'),
	passport = require('passport');

var User = require('../api/users/user.model');

router.use(function (req, res, next) {
	var bodyString = '';
	req.on('data', function (chunk) {
		bodyString += chunk;
	});
	req.on('end', function () {
		bodyString = bodyString || '{}';
		if (bodyString.match(/</gi)) return;
		req.body = JSON.parse(bodyString);
		next();
	});
});

router.use(session({
	secret: require('./secrets.json').session,
	resave: false,
	saveUninitialized: false
}));

passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, done);
});

router.use(passport.initialize());

router.use(passport.session());

module.exports = router;