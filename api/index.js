'use strict';

const express = require('express');
const app = express();
const manifestRoute = express.Router();
const manifest = require('./manifest.json')

manifestRoute.get('/', (req, res) => {
	res.send(manifest)
})

app.use('/manifest', manifestRoute)

module.exports = app;
