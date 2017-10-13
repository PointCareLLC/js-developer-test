'use strict';

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const next = require('next');
const express = require('express');
const api = require('./api');

const client = next({ dev: NODE_ENV === 'development' });
const clientHandler = client.getRequestHandler();
const app = express();

client.prepare().then(() => {
  app.use('/api', api);
  app.get('*', (req, res) => clientHandler(req, res));
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  console.log('listening on port: %d', listener.address().port); //eslint-disable-line
});
