const { User } = require('../models');

class UserController {
	create(req, res) {
		return res.render('auth/signup');
	}

	async store(req, res) {
		const { filename: avatar } = req.file;

		await User.create({ ... req.body, avatar })
			.then()
			.catch(err => console.log(err));

		return res.redirect('/');
	}
}

module.exports = new UserController();