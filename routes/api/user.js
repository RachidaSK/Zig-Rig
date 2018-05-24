var router = require('express').Router();
var user = require('../controller/userController.js');

//----------User Accounts----------

// this needs to take the functionality from login in userController and respond appropriately
router.post('/login', function(req, res) {
	user.login(req, function(data) {
		if (err) res.json(err);
		else res.json(data);
	});
});

// take the functionality from userController logOut and respond with appropriate information.
router.post('/logout', function(req, res) {
	user.logout(req, function(data) {
		// res.json(data);
	});
});

// this is connected to :signup in userController
router.post('/signup', function(req, res) {
	// passing in req.body to keep with userController parameters
	user.signup(req.body, function(err, data) {
		// taking the conditions specified in userController
		// if there is an error then it will send that error back to the client
		if ( err ) res.json(err);
		// if no errors were caught then it will send the User information back to the client
		else res.json(data);
	});
});

module.exports = router;
