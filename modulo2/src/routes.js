const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);
const routes = express.Router();

// Controllers
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const DashBoardController = require('./app/controllers/DashBoardController');
const FileController = require('./app/controllers/FileController');
const AppointmentController = require('./app/controllers/AppointmentController');
const AvailableController = require('./app/controllers/AvailableController');

// Middlewares
const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

// Validação de erro em todas as views
routes.use((req, res, next) => {
	res.locals.flashSuccess = req.flash('success');
	res.locals.flashError = req.flash('error');

	return next();
});

// Arquivos
routes.get('/files/:file', FileController.show);

// SIGNIN - Login
routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

// SIGNUP - Cadastro
routes.get('/signup', guestMiddleware, UserController.create);
routes.post('/signup', upload.single('avatar'), UserController.store);

// LOGOUT - Sair
routes.get('/app/logout', SessionController.destroy);

// DASHBOARD
routes.use('/app', authMiddleware);
routes.get('/app/dashboard', DashBoardController.index);

// Agendamento de serviço
routes.get('/app/appointments/new/:provider', AppointmentController.create);
routes.post('/app/appointments/new/:provider', AppointmentController.store);
routes.get('/app/available/:provider', AvailableController.index);

module.exports = routes;