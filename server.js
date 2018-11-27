const express = require('express');
const bodyParser = require('body-parser');
const feedRouter = require('./routes/feed');
const _PORT = 8080;
const _HOST = 'localhost';
const server = express();

server.use(bodyParser.json());

// CORS ERR solve...
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-control-Allow-Headers', 'Content-Type, Auyhorization');
  next();
});
// Register your routes...
server.use('/feed', feedRouter);

server.listen(_PORT, _HOST, () => {
  console.log(`Node Server is Listening on port ${_PORT}`);
});
