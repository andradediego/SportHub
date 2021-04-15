const router = require('express').Router();
const sql = require("mssql");
const config = require('../db_connection/connectionString');


router.post('/getCalendar', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields, BookFields where BookFields.Inactive = 0 AND EXISTS (SELECT RegistrationDate FROM BookFields);');    
		
		return res.json({
			message: 'I got it 123',
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

module.exports = router;
