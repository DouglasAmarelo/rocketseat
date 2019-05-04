const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);
const routes = express.Router();

// Controllers
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

// Middlewares
const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

// SIGNIN - Login
routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

// SIGNUP - Cadastro
routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

// DASHBOARD
routes.use('/app', authMiddleware);
routes.get('/app/dashboard', (req, res) => {
	console.log('REQ USER', req.session.user);
	return res.render('dashboard');
});

module.exports = routes;