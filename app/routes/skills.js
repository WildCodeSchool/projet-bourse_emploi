/* ------------------------------------------------------------------------- *\
	 						    ROUTES SKILLS
\* ------------------------------------------------------------------------- */

var Skill = require('../models/skill.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app, passport) {

	app.get('/skills', Skill.findAll);

	app.get('/skills/:id', Skill.findById);

	app.post('/skills', Skill.create);

	app.put('/skills/:id', Skill.update);

	app.delete('/skills/:id', Skill.delete);

}