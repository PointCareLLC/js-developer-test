'use strict';

const express = require('express');
const app = express();
const manifestRoute = express.Router();

manifestRoute.get('/', (req, res) => {
	const manifest = require('./manifest.json');
	res.send(manifest);
})

app.use('/manifest', manifestRoute);

module.exports = app;
