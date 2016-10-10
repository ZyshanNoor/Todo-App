var passport = require('passport'),
    User = require('mongoose').model('User');

module.exports = function () {

    passport.serializeUser(function (user, done) {
        done(null, user.name);
    });
    passport.deserializeUser(function (id, done) {

        User.findOne({_id: id}, function (err, user) {
            done(null, user);
        })


    });
    require('./strategies/local')();
};