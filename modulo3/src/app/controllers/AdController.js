const Ad = require('../models/Ad');

class AdController {
	// Listar todos os Ad's
	async index(req, res) {
		const filters = {};
		const adPriceMin = req.query.price_min;
		const adPriceMax = req.query.price_max;
		const adTitle = req.query.title;

		if (adPriceMin || adPriceMax) {
			filters.price = {};

			if (adPriceMin) {
				filters.price.$gte = adPriceMin;
			}

			if (adPriceMax) {
				filters.price.$lte = adPriceMax;
			}
		}

		if (adTitle) {
			filters.title = new RegExp(adTitle, 'i');
		}

		const ads = await Ad.paginate(filters, {
			page: req.params.page || 1,
			limit: 20,
			populate: ['author'],
			sort: '-createdAt'
		});

		return res.json(ads);
	};

	// Mostrar um único Ad
	async show(req, res) {
		const ad = await Ad.findById(req.params.id);

		return res.json(ad);
	};

	// Criar um Ad
	async store(req, res) {
		const ad = await Ad.create({ ...req.body, author: req.userId });

		return res.json(ad);
	};

	// Editar um Ad
	async update(req, res) {
		const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});

		return res.json(ad);
	};

	// Deletar um Ad
	async destroy(req, res) {
		await Ad.findByIdAndDelete(req.params.id);

		return res.send();
	};
};

module.exports = new AdController();