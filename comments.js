var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');
 var http = require('http');
 var fs = require('fs');
 var path = require('path');
 var commentsPath = path.join(__dirname, 'comments.json');
 var url = require('url');
 
 // create a server
 // app.get('/', function(req, res) {
 //     res.send('Hello World!');
 // });
 
 // set up the server to serve static files
 app.use('/', express.static(path.join(__dirname, 'public')));
 
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));
 // create webserver
 http.createServer(function(req, res) {
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     fs.readFile(filename, function(err, data) {
         if (err) {
             res.writeHead(404, { 'Content-Type': 'text/html' });
             return res.end("404 Not Found");
         }
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(data);
         return res.end();
     });
 }).listen(8080);
 
 // parse application/json
 app.use(bodyParser.json());
 // create comments
 var comments = [
     { name: 'John', message: 'Hello' },
     { name: 'Mary', message: 'Hi' },
     { name: 'Sue', message: 'Good morning' },
     { name: 'Bob', message: 'Good evening' }
 ];
 
 // get comments
 app.get('/api/comments', function(req, res) {
     fs.readFile(commentsPath, function(err, data) {
 // create webserver
 http.createServer(function(req, res) {
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     fs.readFile(filename, function(err, data) {
         if (err) {
             console.error(err);
             process.exit(1);
             res.writeHead(404, { 'Content-Type': 'text/html' });
             return res.end("404 Not Found");
         }
         res.json(JSON.parse(data));
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(data);
         return res.end();
     });
 });
 }).listen(8080);
 
 // add comments
 app.post('/api/comments', function(req, res) {
     fs.readFile(commentsPath, function(err, data) {
 // create webserver
 http.createServer(function(req, res) {
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     fs.readFile(filename, function(err, data) {
         if (err) {
             console.error(err);
             process.exit(1);
             res.writeHead(404, { 'Content-Type': 'text/html' });
             return res.end("404 Not Found");
         }
         var comments = JSON.parse(data);
         var newComment = {
             id: Date.now(),
             author: req.body.author,
             text: req.body.text
         };
         comments.push(newComment);
         fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), function(err) {
             if (err) {
                 console.error(err);
                 process.exit(1);
             }
             res.json(newComment);
         });
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(data);
         return res.end();
     });
 });
 }).listen(8080);
 
 // create webserver
 http.createServer(function(req, res) {
     var q = url.parse(req.url, true);
     var filename = "." + q.pathname;
     fs.readFile(filename, function(err, data) {
         if (err) {
             res.writeHead(404, { 'Content-Type': 'text/html' });
             return res.end("404 Not Found");
         }
         res.writeHead(200, { 'Content-Type': 'text/html' });  
          
