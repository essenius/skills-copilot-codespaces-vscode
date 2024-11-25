// Create web server
// Create a route for '/comments' that returns the comments object.
// Start the server on port 3000.
// Use the comments.js file from the previous exercise.

var http = require('http');
var comments = require('./comments');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(JSON.stringify(comments));
});

server.listen(3000);