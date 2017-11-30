/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const fetch = require('node-fetch');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const config = require('./../webpack.config');
const appConfig = require('./config');


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/rabbitmq', (req, res) => {
  fetch(`${appConfig.rabbitMQ.apiUrl}/queues/real-prod`, {
    method: 'GET',
    headers: {
      Authorization: 'Basic cmFiYml0OnJhYmJpdA==',
    },
  })
    .then(response => response.json())
    .then(json => res.send(json));
});

app.get('/api/octopus/dashboard', (req, res) => {
  fetch(`${appConfig.octopus.apiUrl}/dashboard`, {
    method: 'GET',
    headers: {
      'X-Octopus-ApiKey': appConfig.octopus.apiKey,
    },
  })
    .then(response => response.json())
    .then(json => res.send(json));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
