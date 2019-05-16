const express   = require('express');
const session   = require('express-session');
const LokiStore = require('connect-loki')(session);
const path      = require('path');
const flash     = require('connect-flash');

class App {
	constructor() {
		this.express = express();
		this.isDev = process.env.NODE_ENV !== 'production';

		this.middlewares();
		this.routes();
	};

	middlewares() {
		this.express.use(express.json());
	};

	routes() {
		this.express.use(require('./routes'));
	};
};

module.exports = new App().express;