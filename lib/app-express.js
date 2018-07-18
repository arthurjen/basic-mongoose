const express = require('express');
const app = express();
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
app.use(express.static(publicDir));
app.use(express.json());

const teams = require('./routes/teams');
app.use('/api/teams', teams);

module.exports = app;