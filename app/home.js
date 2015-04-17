
define(function (require) {
	
	var app = require('durandal/app');
	var ko = require('knockout');

	return {
		name: ko.observable(),
		sayHello: function() {
			app.showMessage('Testing: ' + this.name() + '.', 'Greetings?');
		}
	};

});
