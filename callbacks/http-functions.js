var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options,(getHTML) => {
    getHTML.setEncoding('utf8');
    let contentBody = '';
    getHTML.on('data', function(chunk) {
      contentBody += chunk;
    });
    getHTML.on('end', () => {
      callback(contentBody)
    });
  });
};
