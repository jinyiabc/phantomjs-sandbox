//1. Hello test by :"phantomjs hello.js"  => hello world
// console.log('hello world');
// phantom.exit();

//2. Network Requests and Responses
var page = require('webpage').create();
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open('www.google.com');
phantom.exit();

/*Request {
    "headers": [
        {
            "name": "User-Agent",
            "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/538.1 (KHTML, like Gecko) PhantomJS/2.1.1 Safari/538.1"
        },
        {
            "name": "Accept",
            "value": "*//*"   @@@additonal / to escape comments.
        }
    ],
    "id": 1,
    "method": "GET",
    "time": "2018-02-27T16:07:34.046Z",
    "url": "file:///Users/jinyi/Desktop/booktradingclub-fcc/www.google.com"
}*/

//3.Page loading
/*
var page = require('webpage').create();
page.open('https://www.google.com/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('google.png');
  }
  phantom.exit();
});*/


//4. Loadspeed test

/*var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});*/


// execute "phantomjs <hello>.js http://www.google.com"
// Result: "Loading http://www.google.com"
// "Loading time 2048 msec"

//5.Page evaluation

/*var url = "https://www.facebook.com/";
var page = require('webpage').create();
page.open(url, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});*/


//result: "Page title is Facebook - Log In or Sign Up"
