//I hate CORS

var express = require('express');
var app = express();
var OAuth = require('oauth');

var user_token;
var user_secret;
var diary;
var response;
app.get('/', function(req, res){

user_token=req.query.user_token;
user_secret=req.query.user_secret;
diary=req.query.diary;
response=req.query.response;

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '7VfKo4tn3t9Xxx2Kky0ab7yqi',      //App consumer key for twitter
      'ZoCq6apXgSgQzr89bB5b8o4VORHS68Uwgr69WxaBvqirEWXRmH',     //App secret key for twitter
      '1.0A',
      null,
      'HMAC-SHA1'
    );

oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      user_token,       //User token
      user_secret,      //User secret
        {"status": diary+response },
        function (e, data, res){
        if (e) console.error(e);
        else console.log(require('util').inspect(data));
      });
});
app.listen(3000);
