var passport = require('passport'),
    User = require('mongoose').model('User');

module.exports = function () {

 
  passport.serializeUser(function (user, done) {
        console.log("+++++++++++++++==================+++++++++++++++++++++ 1");
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {

        User.findOne({ _id: id},function (err,user) {
            done(null,user);
        })


    });
    require('./strategies/local')();
};