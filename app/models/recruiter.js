var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');

var User = require('./user.js');

var RecruiterSchema = User.model.schema.extend({
    admin: {
        type: Boolean,
        default: false
    },
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
            _type: 'Recruiter'
        }, {
            password: 0
        }, function (err, users) {
            res.json(users);
        });
    },

    findAll: function (req, res) {
        Recruiter.model.find({}, {
            password: 0
        }, function (err, recruiters) {
            res.json(recruiters);
        });
    },

    findById: function (req, res) {
        Recruiter.model.findById(req.params.id, {
            password: 0
        }, function (err, recruiter) {
            if (err)
                console.log(err);
            res.json(recruiter);
        });
    },

    findByEmail: function (req, res) {
        Recruiter.model.findOne({
            email: req.headers.email
        }, {
            password: 0
        }, function (err, data) {
            if (data)
                res.status(409).send("Un compte existe déjà avec l'adresse mail " + req.headers.email);
            else
                res.status(200).send();
        });
    },

    create: function (req, res) {
        Recruiter.model.create(req.body, function (err, recruiter) {
            if (err)
                console.log(err);
            res.json(recruiter);
        });
    },

    update: function (req, res) {
        Recruiter.model.findByIdAndUpdate(req.params.id, req.body, function (err, recruiter) {
            return Recruiter.findById(req, res);
        });
    },

    delete: function (req, res) {
        Recruiter.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}


module.exports = Recruiter;