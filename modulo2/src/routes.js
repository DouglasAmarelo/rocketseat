const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const routes = express.Router();

// SIGNIN
routes.get('/', SessionController.create);
routes.post('/signin', SessionController.store);

// SIGNUP
routes.get('/signup', UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

module.exports = routes;