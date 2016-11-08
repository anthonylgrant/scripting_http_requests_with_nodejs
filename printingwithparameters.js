var https = require('https');

function getAndPrintHTML(options) {


  var notRequestOptions = {
    host: options.host,
    path: options.path
    };

  https.get(notRequestOptions, function (response) {
    let contentStr = "";
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function(datachunk) {
      console.log('Chunk Received. Length:', datachunk.length);
      // console.log(substr(data, 0, 5));
      contentStr += datachunk;
      // using substring to reduce amount of data per chunk
      // to easier scan
      console.log(datachunk.substr(0, 5));
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log("This is my content string: " + contentStr.substr(0, 50))
    });
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);