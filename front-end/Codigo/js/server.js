import express from 'express';

const usuarioController = require('./usuariocontroller');

const application = express();
application.use(express.json());
application.use(express.urlencoded())

application.use('/api', usuarioController);

module.exports = application;