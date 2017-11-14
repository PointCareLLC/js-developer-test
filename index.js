'use strict';

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const SECRET = process.env.SECRET || 'some secret';

const next = require('next');
const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const api = require('./api');

const client = next({ dev: NODE_ENV === 'development' });
const clientHandler = client.getRequestHandler();
const app = express();

app.use(session({secret: SECRET, cookie: { maxAge: 60000 } }));

client.prepare().then(() => {
  app.use(csrf());

  // error handler
  app.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    const token = req.csrfToken();
    console.log("REQ", token)

    // handle CSRF token errors here
    res
    .status(403)
    .send('session has expired or form tampered with')
  })

  app.use('/api', api);
  app.get('*', (req, res) => clientHandler(req, res));
});

const listener = app.listen(PORT, err => {
  if (err) throw err;
  console.log('listening on port: %d', listener.address().port); //eslint-disable-line
});
