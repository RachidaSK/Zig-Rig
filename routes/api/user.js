var router = require('express').Router();
var user = require('../controller/userController.js');

//----------User Accounts----------

router.post('/login', function(req, res) {
	user.login(req, function(data) {
		res.json(data);
	});
});

router.post('/logout', function(req, res) {
	user.logout(req, function(data) {
		res.json(data);
	});
});

router.post('/signup', function(req, res) {
	user.signup(req, function(data) {
		res.json(data);
	});
});

module.exports = router;
