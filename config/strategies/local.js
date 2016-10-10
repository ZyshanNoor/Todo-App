var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');


module.exports = function () {
    console.log(" now here --");

    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
    },
        function (username,password, done) {
            console.log("__________________________ usedr: ",username);
            User.findOne({name: username},
                function (err, user) {
                    if (err) {
                        return done(err);

                    }
                    if (!user) {
                        return done(null, false, {message: 'Invalid login credentials'});
                    }
                    return done(null, user);
                });
        }));
};