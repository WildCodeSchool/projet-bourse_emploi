var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');

var User = require('./user.js');

var RecruiterSchema = User.model.schema.extend({
    admin: Boolean,
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    logo: String,
    picture: String,
    description: {
        type: String,
        required: true
    },
    businessSector: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    likes: [{
        like: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]

});

var Recruiter = {
    model: mongoose.model('Recruiter', RecruiterSchema),

    findByType: function (req, res) {
        Recruiter.model.find({
            _type: req.params.type
        }, function (err, recruiter) {
            res.json(recruiter);
        });
    },

    findAll: function (req, res) {
        Recruiter.model.find({}, function (err, recruiters) {
            res.json(recruiters);
        });
    },

    findById: function (req, res) {
        console.log(req.params.id);
        Recruiter.model.findById(req.params.id, function (err, recruiter) {
            console.log(err);
            res.json(recruiter);
        });
    },

    findByEmail: function (req, res) {
        Recruiter.model.findOne({
            email: req.headers.email
        }, function (err, data) {
            if (data)
                res.status(409).send("Un compte existe déjà avec l'adresse mail " + req.headers.email);
            else
                res.status(200).send();
        });
    },

    create: function (req, res) {
        req.body.admin = false;
        Recruiter.model.create(req.body, function (err, recruiter) {
            res.json(recruiter);
            console.log(recruiter)
            console.log(err);
        });
    },

    update: function (req, res) {
        Recruiter.model.findByIdAndUpdate(req.params.id, req.body, function (err, recruiter) {
            res.json(recruiter);
        });
    },

    delete: function (req, res) {
        Recruiter.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}


module.exports = Recruiter;