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
			message: 'Success',
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
router.post('/prodInsert', async (req, res) => {
	let pool = await sql.connect(config);		
	try {
		const data = req.body;
		

		if (!(data || data.name || data.location || data.description || data.src || data.inactive)) {
			return res.status(400).send({
				message: 'Invalid data'
			});
		}
		console.log(data);
		if (data.id == 0) {
		//Add New Field
			//console.log('New data')
			let {recordset} = await pool.request()
			.input('name', sql.NVarChar(100), data.name)
			.query('select * from Fields where Name = @name');

			if (recordset.length > 0) { 
				return res.json({
					message: 'Field Duplicated'
				});
			}
				const insertQuery = `
					insert into Fields (Name, Location, Description, src, Inactive) 
					values (@name, @location, @description, @src, @inactive);
					SELECT SCOPE_IDENTITY() AS name;
				`

				let newField = await pool.request()
				.input('Name', sql.NVarChar(100), data.name)
				.input('Location', sql.NVarChar(200), data.location)
				.input('Description', sql.NVarChar(500), data.description)
				.input('src', sql.NVarChar(500), data.src)
				.input('inactive', sql.Bit, data.inactive)			
				.query(insertQuery);

	
				
				return res.json({
					message: 'New Field Added!',
					data: newField
				});
			
		} else {
			//Edit Existing Field

			let {recordset} = await pool.request()
				.input('name', sql.NVarChar(100), data.name)
				.input('location', sql.NVarChar(200), data.location)
				.input('description', sql.NVarChar(500), data.description)
				.input('src', sql.NVarChar(500), data.src)
				.input('inactive', sql.Bit, data.inactive)
				.input('id', sql.Int, data.id)
				.query('select * from Fields where Name = @name and Location = @location and Description = @description and src = @src and Inactive = @inactive');
		

			if (recordset.length > 0) {
				return res.status(400).send({
					message: 'Field already registred'
				});
			}

			const insertQuery = `
			update Fields 
			SET Name = @name, Location = @location, Description = @description, src = @src, Inactive = @inactive
			where fieldId = @id			
			`

			let updatedField = await pool.request()
			.input('name', sql.NVarChar(100), data.name)
			.input('location', sql.NVarChar(200), data.location)
			.input('description', sql.NVarChar(500), data.description)
			.input('src', sql.NVarChar(500), data.src)
			.input('inactive', sql.Bit, data.inactive)
			.input('id', sql.Int, data.id)
			.query(insertQuery);

			return res.json({
				message: 'Succesfull Insert!',
				data: updatedField
			});
		}	
		
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});

module.exports = router;