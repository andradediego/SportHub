const router = require('express').Router();
const sql = require("mssql");
const config = require('../db_connection/connectionString');


router.post('/product', async (req, res) => {
	let pool = await sql.connect(config);		
	try {
		const data = req.body;
        console.log(data)

		let {recordset} = await pool.request()
			.query('select * from Fields');
            console.log(recordset);
		return res.json({

			message: 'I got it',
			field: data.recordset,
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