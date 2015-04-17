define(function (require) {

	var internalRouter = require('plugins/router');

	return {
		router: internalRouter,
		activate: function()
		{
			internalRouter.map([
				{
					route: '',
					title: 'Home',
					moduleId: 'home',
					nav: true
				},
				{
					route: 'rainier',
					title: 'Mount Rainier',
					moduleId: 'rainier',
					nav: true
				}]).buildNavigationModel();

			return internalRouter.activate();
		}
	};

});