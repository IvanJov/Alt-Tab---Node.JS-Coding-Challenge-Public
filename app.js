'use strict';

const express = require('express');
const controllers = require('./app/controllers');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app
  .post('/api/register', controllers.register)
  .post('/api/login', controllers.login);

app.use(controllers.auth);

app
  .get('/api/profile', controllers.profile)

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});

module.exports = app;
