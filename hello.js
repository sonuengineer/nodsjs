console.log("hello World");
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Welcome home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/about") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p> Welcome to About Us page</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/node") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Welcome to my Node Js project.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
