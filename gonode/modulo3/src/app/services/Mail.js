const nodemailer = require('nodemailer');
const path       = require('path');
const hbs        = require('nodemailer-express-handlebars');
const exphbs     = require('express-handlebars');
const mailConfig = require('../../config/mail');

const transport = nodemailer.createTransport(mailConfig);

const viewPath = path.resolve(__dirname, '..', 'views', 'emails');

const handlebarOptions = {
	viewEngine: exphbs.create({
		partialsDir: path.resolve(viewPath, 'partials'),
		defaultLayout: null
	}),
	viewPath,
	extName: '.hbs'
};

transport.use('compile', hbs(handlebarOptions));

module.exports = transport;
