// This is the express controller
// Middleware CommonJS module pattern to define a function named render() that you'll be able to require this module and call its
// function

exports.render = function(req, res) {
	// The first argument is the name of your EJS template without the .ejs extension, and the second argument is an object containing your
	// template variables
	res.render('index', {
		title: 'Hello Erwin'
	})
};