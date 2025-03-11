// create webserver
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');

// create a server
// app.get('/', function(req, res) {
//     res.send('Hello World!');
// });

// set up the server to serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// get comments
app.get('/api/comments', function(req, res) {
    fs.readFile(commentsPath, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

// add comments
app.post('/api/comments', function(req, res) {
    fs.readFile(commentsPath, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {
            id: Date.now(),