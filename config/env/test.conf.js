module.exports = {
  //mongodb
    db:'localhost:27017/test-todoapp',
    sessionSecret: 'S3cr3t',
    facebook :{
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    google :{
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    },
    twitter:{
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    }

};