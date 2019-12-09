
const url=require('url');
var https = require('https');
var request = require('request');
const test=name();
function name() {
    request.get({
      
      url: "https://graph.facebook.com/2916198628413342?fields=first_name,last_name,profile_pic&access_token=EAAe5Nry9zlwBAOz04yE4LbOA7k3Kl3DQpuW8LVgFwai07hkgpttXKEukcDRfHuJuHnwHyWOFENb4AdgjuOD5Lu2zp6dyHf5uxO1lLYsJ4iMroPLvtyQwBk9nxGBZCTPSGxZCJFy50To70YESzvextCVIb1nS2Sn2rMBzJxECqEsI1P7V8o",
    }, function(err, response, body) {
      if (err) {
        return err
      }
      var name = JSON.parse(body).first_name
      console.log(name);
    });
  }
//console.log(test);


function testing(){
    name();



}