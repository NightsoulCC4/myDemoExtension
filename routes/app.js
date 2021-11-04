var express = require('express');
var app = express();
var router = express.Router();
var http = require('http');
var server = http.createServer(app);

const db = require('../database/database')

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

module.exports = router;