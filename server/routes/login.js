const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sql = require("mssql");
const checkAuthentication = require('./checkAuthentication');

 // Diego
const config = {
	user: 'sa',
	password: '123456',
	server: 'NERDJESTER-NOTE\\SQLEXPRESS',
	database: 'SportHub'
};

//Guilherme Config
// const config = {
// 	user: 'sa',
// 	password: '12345678',
// 	server: 'DESKTOP-0Q3IKPE\\SPORTHUB',
// 	database: 'SportHub',
// 	options:{
// 		enableArithAbort: true
// 	}
// };




router.post('/register', async (req, res) => {
	let pool = await sql.connect(config);		
	try {
		const data = req.body;

		if (!(data || data.name || data.email || data.password)) {
			return res.status(400).send({
				message: 'Invalid data'
			});
		}

		let {recordset} = await pool.request()
			.input('email', sql.NVarChar(50), data.email)
			.query('select * from Login where email = @email');

		if (recordset.length > 0) {
			return res.status(400).send({
				message: 'User already register'
			});
		}

		const salt = await bycrypt.genSalt(10);
		const hashedPassword = await bycrypt.hash(data.password, salt);

		const insertQuery = `
			insert into Login (name, email, password) 
			values (@name, @email, @password); 
			SELECT SCOPE_IDENTITY() AS id;
		`

		let newUser = await pool.request()
			.input('name', sql.NVarChar(50), data.name)
			.input('email', sql.NVarChar(50), data.email)
			.input('password', sql.NVarChar(100), hashedPassword)
			.query(insertQuery);

			if (newUser.recordset.length == 0) {
				return res.status(500).send({
					message: 'Sorry we cannot process your data right now, please try again later'
				});
			}

		return res.json({
			message: 'Register was succesfull',
			user: {
				name: data.name,
				login: data.login,
			}
		});
		
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});


router.post('/login',  async (req, res) => {	
	let pool = await sql.connect(config);

	try {
		const data = req.body;
		//console.log(data);

		if (!(data || data.email || data.password)) {
			return res.status(400).send({
				message: 'Invalid data'
			});
		}
		
		let { recordset } = await pool.request()
			.input('email', sql.NVarChar(50), data.email)
			.query('select * from Login where email = @email');
		//console.log(recordset);
		if (recordset.length != 1) {
			return res.status(400).send({
				message: 'User not found'
			});
		}
		
		if (!await bycrypt.compare(data.password, recordset[0].Password)) {
			return res.status(400).send({
				message: 'Invalid credentials!'
			});
		}	
		
		const token = jwt.sign({ id: recordset[0].Email}, process.env.ACCESS_TOKEN_SECRET);
		
		//generate the cookie
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000 // 1 day
		});

		return res.json({
			message: 'User authenticated!'
		});		
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});

router.post('/checkAuthenticationStatus', checkAuthentication, async (req, res) => {
	try {	

		const cookie = req.cookies['jwt'];

		const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

		return res.send(claims);
	} catch (error) {
		return res.status(401).send({
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

