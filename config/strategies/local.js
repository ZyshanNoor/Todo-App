var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function (username, password, done) {
            User.findOne({name: username},
                function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    else if (!user || user.length == 0) {
                        return done(null, false, {message: 'User is not registered'});
                    }
                    else {
                        return done(null, user);
                    }
                });
        }));
};