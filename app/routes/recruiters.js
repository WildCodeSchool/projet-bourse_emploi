/* ------------------------------------------------------------------------- *\
	 						    ROUTES Recruiters
\* ------------------------------------------------------------------------- */

var Recruiter = require('../models/recruiter.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app, passport) {

	app.get('/recruiters', Auth.user.hasAuthorization, Recruiter.findAll);

	app.get('/recruiters/:id', Auth.user.hasAuthorization, Recruiter.findById);

	app.post('/recruiters', Auth.user.hasAuthorization, Recruiter.create);

	app.put('/recruiters/:id', Auth.user.hasAuthorization, Recruiter.update);

	app.delete('/recruiters/:id', Auth.user.hasAuthorization, Recruiter.delete);

}





