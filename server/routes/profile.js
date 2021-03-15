const router = require('express').Router();
// const bycrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const sql = require("mssql");
const checkAuthentication = require('./checkAuthentication');
const config = require('../db_connection/connectionString');

router.post('/getUserProfile', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	try {
		

		const userEmail = req.userData.id;
		let { recordset } = await pool.request()
		.input('email', sql.NVarChar(50), userEmail)
		.query(`select l.loginid, l.name, l.email, l.about, s.sport, s.sportid from login as l
		inner join sportsprofile as sl on sl.LoginId = l.LoginId
		inner join sports as s on s.sportid = sl.sportid where l.email = @email`);

		if (recordset.length < 1) {
			return res.status(400).send({
				message: 'Not data found'
			});
		}

		let userData = {
			// email: recordset[0].email,
			name: recordset[0].name,
			about: recordset[0].about,
			sports: recordset.map((item) => {return {sport: item.sport, id: item.sportid}})
		}

		return res.json({
			message: 'User data',
			data: userData
		});	
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});

module.exports = router;