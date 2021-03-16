const router = require('express').Router();
// const bycrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const sql = require("mssql");
const checkAuthentication = require('./checkAuthentication');
const config = require('../db_connection/connectionString');


async function getUserData (userEmail) {
	let pool = await sql.connect(config);	
	try {
		const { recordset } = await pool.request()
		.input('email', sql.NVarChar(50), userEmail)
		.query(`select l.loginid, l.name, l.email, l.about, s.sport, s.sportid from login as l
		inner join sportsprofile as sl on sl.LoginId = l.LoginId
		inner join sports as s on s.sportid = sl.sportid where l.email = @email and sl.inactive = 0
		and l.inactive = 0 and s.inactive = 0
		`);
		
		return recordset;
	} catch (error) {
		return null;
	}
}

router.post('/getUserProfile', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {
		const userEmail = req.userData.id;
		const recordset = await getUserData(userEmail);

		if (recordset.length < 1) {
			return res.status(400).send({
				message: 'Not data found'
			});
		}

		let userData = {
			// email: recordset[0].email,
			name: recordset[0].name,
			about: recordset[0].about,
			sports: recordset.map((item) => { return {sport: item.sport, id: item.sportid} })
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

router.post('/updateUserProfile', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	try {
		
		const userEmail = req.userData.id;

		let { recordset } = await pool.request()
			.input('email', sql.NVarChar(50), userEmail)
			.query('select * from Login where email = @email and inactive = 0');
		
		if (recordset.length < 1) {
			return res.status(400).send({
				message: 'User not found'
			});
		}
		
		const data = req.body;		
		const loginId = recordset[0].LoginId;
		let { rowsAffected } = await pool.request()
		.input('name', sql.NVarChar(50), data.name)
		.input('about', sql.NVarChar(500), data.about)
		.input('loginid', sql.Int, loginId)
		.query(`update login set name = @name, about = @about where loginid = @loginid`);

		if (rowsAffected.length < 1) {
			return res.status(400).send({
				message: 'Server error, please try again later'
			});
		}

		let deletedSportsProfile = await pool.request()
		.input('loginid', sql.Int, loginId)
		.query(`update SportsProfile set inactive = 1 where loginid = @loginid`);

		if (deletedSportsProfile.rowsAffected.length < 1) {				
			return res.status(400).send({
				message: 'Error to update the sports interests'
			});
		}
		
		for (let index = 0; index < data.sports.length; index++) {
			const sportId = data.sports[index];
			let insertSportsProfile = await pool.request()
			.input('loginId', sql.Int, loginId)
			.input('sportId', sql.Int, sportId)
			.query(`insert into SportsProfile (loginid, sportid) values (@loginId, @sportId)`);

			if (insertSportsProfile.rowsAffected.length < 1) {				
				return res.status(400).send({
					message: 'Error to update the sports interests'
				});
			}			
		}		

		return res.json({
			message: 'Profile updated successfully'			
		});

	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});


router.post('/getSports', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {
		
		let {recordset} = await pool.request()		
		.query(`select sportid as id, sport from sports where inactive = 0`);		

		return res.json({			
			data: recordset
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