var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, function printLowercase (html) {
  console.log(html.toLowerCase());
});