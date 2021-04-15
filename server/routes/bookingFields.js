const router = require('express').Router();
const sql = require("mssql");
const config = require('../db_connection/connectionString');
const checkAuthentication = require('./checkAuthentication');

router.post('/bookingField', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields where Inactive = 0');    
		
		return res.json({
			message: 'I got it',
			data: recordset,
		});
		
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});



async function getUserData (userEmail) {
	let pool = await sql.connect(config);	
	try {
		const { recordset } = await pool.request()
		.input('email', sql.NVarChar(50), userEmail)
		.query(`select LoginId from Login where email = @email
		`);
		
		return recordset[0].LoginId;
	} catch (error) {
		return null;
	}
}

router.post('/onBooking', checkAuthentication, async (req, res) => {
		let pool = await sql.connect(config);		
		
		try {
			const data = req.body;
			const userEmail = req.userData.id;
			const recordset = await getUserData(userEmail);
			
			// if (data.id != 0) {
			// 		let {recordset} = await pool.request()
			// 		.input('fieldId', sql.NVarChar(100), data.id)
			// 		.input('bookDateStart', sql.NVarChar(100), data.datePick)
			// 		.query('select * from BookFields where FieldId = @fieldId AND BookDateStart = @bookDateStart');
			// 		console.log(recordset);
			// 		if (recordset.length > 0) { 
					
			// 			return res.json({
			// 				message: 'Field Duplicated'
			// 			});
			// 		}
			// 	}
				
					const insertQuery = `
						insert into BookFields (LoginId, FieldId, BookDateStart, BookDateFinish, Inactive) 
						values (@loginId, @fieldId, @bookDateStart, @bookDateFinish, @inactive);
						SELECT SCOPE_IDENTITY() AS id;
					`
					console.log(data);
					let newBooking = await pool.request()
					.input('loginId', sql.NVarChar(100), recordset)
					.input('fieldId', sql.NVarChar(200), data.id)
					.input('bookDateStart', sql.NVarChar(500), data.datePick1)
					.input('bookDateFinish', sql.NVarChar(500), data.datePick2)		
					.input('inactive', sql.Bit, 0)								
					.query(insertQuery);
	
		
					console.log("Success");
					return res.json({
						message: 'New Field Added!',
						data: newBooking
					});
				
		
		} catch (error) {
			console.log("error");
			return res.status(500).send({
				message: error.message
			});
		} finally {
			pool.close();
		}
	});


module.exports = router; 