const db = require("../models/User");

module.exports = {
	//TODO
	//handle login request
	login: function(req, cb) {
		db.User
		// needs to look for user in the database.
		// .find({username: req.body.username, password: req.body.password})
		// if found then redirect to '/home'
		.then(function(dbUser){
			cb(null, dbUser, {redirect: '/home'});
		})
		// catching errors
		.catch(function(err){
			// if error is caught then will respond with message and error to the console
			// and then will send the error back to the user.
			console.log("There was an error logging in!");
			console.log(err);
			cb(err);
		});
	},
	
	//TODO
	//handle logout request
	logout: function(req, cb) {
		db.User
			// forget user credentials in local storage/ session storage
			// redirect to '/'
			// this will be done with authentication. 
			// a simple redirect should be more than sufficient for now.
		cb({redirect:'/'});
	},
	
	//TODO
	//create new account
	// creates a new user as specified in user model and then passes that into the mongo database
	// passing in userData as a parameter to refer to the entered data.
	signup: function(userData, cb) {
		// accessing the User model.
		db.User
			// creating new user from input data with the user model
			.create(userData)
			// promise if successful
			.then(function(dbUser) {
				// the .then promise will console.log a message and then return the new user added to the database.
				console.log("User Created");
				console.log(dbUser);
				cb(null, dbUser, {redirect: '/home'});
			})
			// catching errors
			.catch(function(err) {
				//console.log message and the errors
				console.log("There was an error creating a new user");
				console.log(err);
				// sending the error back to the client.
				cb(err)
			});
	},
}
