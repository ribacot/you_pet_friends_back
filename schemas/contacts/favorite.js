const Joi = require("joi");

const favoriteSchem = Joi.object({
	favorite: Joi.boolean()
		.required()
		.messages( {'any.required': `missing field favorite`  }),
});

module.exports = favoriteSchem;
