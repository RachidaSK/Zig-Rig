module.exports = {
	//TODO
	//handle login request
	login: function(req, cb) {
		cb({redirect:'/home'});
	},
	
	//TODO
	//handle logout request
	login: function(req, cb) {
		cb({redirect:'/'});
	},
	
	//TODO
	//create new account
	signup: function(req, cb) {
		cb({redirect:'/home'});
	},
}
