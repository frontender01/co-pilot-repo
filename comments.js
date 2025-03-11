// create web serrver
const express = require('express');
const app = express();
app.use(express.static('public'));

// create comments array
const comments = [
  {name: 'Kai', message: 'Hello!'},
  {name: 'Moe', message: 'Hi!'},
  {name: 'Kai', message: 'How are you?'}
];

// create comment api
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// start web server
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
