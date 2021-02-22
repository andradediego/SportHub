const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function checkAuthentication(req, res, next) {	
	try {
		const cookie = req.cookies['jwt'];

		const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

		if (!claims) {
			return res.status(401).send({
				message: 'Unauthenticated!'
			});
		}
		next();		
	} catch (error) {
		return res.status(401).send({
			message: 'Unauthenticated!'
		});
	}
}

module.exports = checkAuthentication;