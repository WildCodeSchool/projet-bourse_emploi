/* ------------------------------------------------------------------------- *\
	 						    ROUTES OFFERS
\* ------------------------------------------------------------------------- */

var Offer = require('../models/offer.js');
var Auth = require('../middlewares/authorization.js');

module.exports = function (app, passport) {

    app.get('/api/offers', Auth.user.hasAuthorization, Offer.findAll);

    app.get('/api/offers/:id', Auth.user.hasAuthorization, Offer.findById);

    app.get('/api/offers/currents', Auth.user.hasAuthorization, Offer.findAllCurrent);

    app.get('/api/offers/users/:id', Auth.user.hasAuthorization, Offer.findByUser);

    app.post('/api/offers', Auth.user.hasAuthorization, Offer.create);

    app.put('/api/offers/:id', Auth.user.hasAuthorization, Offer.update);

    app.delete('/api/offers/:id', Auth.user.hasAuthorization, Offer.delete);

    app.post('/api/offers/skills', Auth.user.hasAuthorization, Offer.findBySkill);

}