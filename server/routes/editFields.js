const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sql = require("mssql");
const config = require('../db_connection/connectionString');


router.post('/prodAdmin', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields');    
		
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

//retornar 1 so por id para edicao
router.post('/prodAdmin', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields');    
		
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

//Edit or insert 
router.post('/prodAdmin', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields');    
		
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
//Delete -- invalidar
router.post('/prodAdmin', async (req, res) => {
	let pool = await sql.connect(config);		
	try {

		let { recordset } = await pool.request()
			.query('select * from Fields');    
		
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






module.exports = router;