const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = [];

// register
router.post('/register', async (req, res) => {
	const salt = await bycrypt.genSalt(10);
	const hashedPassword = await bycrypt.hash(req.body.password, salt);   
	
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	};

	db.push(newUser);	

	return res.json({
		message: 'It is working',
		newUser
	});
});


router.post('/login', async (req, res) => {
	
	const user = db.find(element => {
		return element.email === req.body.email;
	});
	
	if (!user) {
		res.status(404).send({
			message: 'user not found!'
		});
	}
	
	if (!await bycrypt.compare(req.body.password, user.password)) {
		res.status(400).send({
			message: 'invalid credentials!'
		});
	}

	console.log(process.env.ACCESS_TOKEN_SECRET);
	const token = jwt.sign({ id: user.email}, process.env.ACCESS_TOKEN_SECRET);
	
	//generate the cookie
	res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000 // 1 day
	});

	return res.json({
		message: 'User authenticated!'
	});
});

router.post('/user', async (req, res) => {
	try {
		const cookie = req.cookies['jwt'];

		const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

		if (!claims) {
			res.status(401).send({
				message: 'Unauthenticated!'
			});
		}

		res.send(claims);
	} catch (error) {
		res.status(401).send({
			message: 'Unauthenticated!'
		});
	}
});

router.post('/logout', async (req, res) => {
	res.cookie('jwt', '', {		
		maxAge: 0
	});

	return res.json({
		message: 'User logged out!'
	});
});


module.exports = router;

