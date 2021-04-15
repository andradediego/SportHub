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
		.query(`
		select 
			l.loginid, 
			l.name, 
			l.email, 
			l.about, 
			s.sport, 
			s.sportid
		from 
			login as l
			left join sportsprofile as sl on sl.LoginId = l.LoginId and sl.inactive = 0
			left join sports as s on s.sportid = sl.sportid and s.inactive = 0
		where 
			l.email = @email 
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
		let recordset = await getUserData(userEmail);

		if (recordset.length < 1) {
			return res.status(400).send({
				message: 'Not data found'
			});
		}

		let userData = {
			// email: recordset[0].email,
			name: recordset[0].name ? recordset[0].name : '',
			about: recordset[0].about ? recordset[0].about : '',
			sports: recordset[0].sport ? recordset.map((item) => { return {sport: item.sport, id: item.sportid} }) : []
		};

		({ recordset } = await pool.request()		
		.input('email', sql.NVarChar(50), userEmail)
		.query(`
			SELECT 
				q.userloginid as id,
				q.friendLoginId,
				l.Name 
			FROM Friends as q
				inner join login as l on l.LoginId = q.UserLoginId
			where 
				UserLoginId != (select t.loginid from login as t where t.email = @email)
				and q.inactive = 0 and q.acceptedrequest = 0
		`));

		userData.friendRequested = recordset;

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

router.post('/findUser', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {
		const search = req.body.search;
		const userEmail = req.userData.id;
		let {recordset} = await pool.request()
			.input('search', sql.NVarChar(50), search)			
			.input('email', sql.NVarChar(50), userEmail)
			.query(`
			select 
				loginid as id, 
				name,
				case 
					when (SELECT count(*)       
				FROM Friends
				where 
				(UserLoginId = (select loginid from login where email = @email) or FriendId = (select loginid from login where email = @email))
				and (UserLoginId = loginid or FriendId = loginid) and inactive = 0 and acceptedrequest = 0) > 0 then 1
				else 0 end as friendRequested
			from login where name like concat('%', rtrim(ltrim(@search)), '%') and inactive = 0
			and email != @email
			`);		
		return res.json({			
			data: await recordset.map((item) => {
				return {
					name: item.name,
					id: item.id,
					friendRequested: item.friendRequested == 1
				}
			})
		});

	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});


router.post('/getUserSearchedProfile', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {
		const userID = req.body.id;
		const userEmail = req.userData.id;
		let recordset = null;
		({ recordset } = await pool.request()
		.input('id', sql.Int, userID)
		.input('email', sql.NVarChar(50), userEmail)
		.query(`
		select 
			l.loginid, 
			l.name, 
			l.email, 
			l.about, 
			s.sport, 
			s.sportid,
			case 
				when (SELECT count(*)       
					FROM Friends
					where 
					(UserLoginId = (select t.loginid from login as t where t.email = @email) or FriendId = (select h.loginid from login as h where h.email = @email))
					and (UserLoginId = l.loginid or FriendId = l.loginid) and inactive = 0 and acceptedrequest = 0) > 0 
				then 1
				else 0 end as friendRequested 
		from 
			login as l
			left join sportsprofile as sl on sl.LoginId = l.LoginId and sl.inactive = 0
			left join sports as s on s.sportid = sl.sportid and s.inactive = 0
		where 
			l.loginid = @id 
		`));
		

		if (recordset.length < 1) {
			return res.status(400).send({
				message: 'Not data found'
			});
		}

		let userData = {
			// email: recordset[0].email,
			name: recordset[0].name,
			about: recordset[0].about,
			friendRequested: recordset[0].friendRequested == 1,
			sports: recordset.map((item) => { 
				return {sport: item.sport, id: item.sportid} 
			})
		};

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

router.post('/requestAddFriend', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {

		const friendId = req.body.id;
		const userEmail = req.userData.id;
		var recordset = null;

		({ recordset } = await pool.request()
		.input('friendId', sql.Int, friendId)
		.input('userEmail', sql.NVarChar(50), userEmail)		
		.query(`
			SELECT [FriendLoginId]
			,[UserLoginId]
			,[FriendId]
			,[AcceptedRequest]      
		FROM Friends
		where 
			(UserLoginId = (select loginid from login where email = @userEmail) 
				or FriendId = (select loginid from login where email = @userEmail))
			and (UserLoginId = @friendId or FriendId = @friendId) and inactive = 0 and acceptedrequest = 0
	`));
		
		if (recordset.length > 0) {
			return res.json({
				message: 'Request already sent it'
			});
		}

		({ recordset } = await pool.request()
		.input('friendId', sql.Int, friendId)
		.input('userEmail', sql.NVarChar(50), userEmail)
		.input('friendRequest', sql.Bit, 0)
		.query(`insert into Friends (UserLoginId, FriendId, AcceptedRequest)  
		values ((select loginid from login where email = @userEmail), @friendId, @friendRequest)`));

		({recordset} = await pool.request()
		  .input('friendId', sql.Int, friendId)		
			.input('email', sql.NVarChar(50), userEmail)
			.query(`
			select 
				loginid as id, 
				name,
				case 
					when (SELECT count(*)       
				FROM Friends
				where 
				(UserLoginId = (select loginid from login where email = @email) or FriendId = (select loginid from login where email = @email))
				and (UserLoginId = @friendId or FriendId = @friendId) and inactive = 0 and acceptedrequest = 0) > 0 then 1
				else 0 end as friendRequested
			from login
			where 
				loginid = @friendId and inactive = 0
				and email != @email
			`));
		// console.log(recordset);
		return res.json({
			message: 'User data',
			data: recordset[0]
		});
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});

router.post('/resolveFriendRequest', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {

		const clientData = req.body;
		// const userEmail = req.userData.id;
		var recordset = null;		

		({ recordset } = await pool.request()
		.input('accepted', sql.Bit, clientData.accepted)
		.input('canceled', sql.Bit, clientData.canceled)
		.input('id', sql.Int, clientData.id)		
		.query(`
			update friends set AcceptedRequest = @accepted, Inactive = @canceled 
			where friendLoginId = @id
		`));
		
		return res.json({
			message: 'User data',
			data: 'It Works'
		});
	} catch (error) {
		return res.status(500).send({
			message: error.message
		});
	} finally {
		pool.close();
	}
});


router.post('/getUserFriends', checkAuthentication, async (req, res) => {
	let pool = await sql.connect(config);		
	
	try {
		
		const userEmail = req.userData.id;
		var recordset = null;

		({ recordset } = await pool.request()		
		.input('email', sql.NVarChar(50), userEmail)
		.query(`
				select distinct 
				q.id, q.friendLoginId, l.Name from ((SELECT userloginid as id,
				friendLoginId
				FROM Friends
				where 
				(UserLoginId = (select t.loginid from login as t where t.email = @email) or FriendId = (select h.loginid from login as h where h.email = @email))
				and inactive = 0 and acceptedrequest = 1)
				union
				(SELECT friendid as id,
				friendLoginId
				FROM Friends
				where 
				(UserLoginId = (select t.loginid from login as t where t.email = @email) or FriendId = (select h.loginid from login as h where h.email = @email))
				and inactive = 0 and acceptedrequest = 1)) as q
				inner join login as l on l.LoginId = q.id
				where id != (select t.loginid from login as t where t.email = @email)
		`));
		
		return res.json({
			message: 'User data',
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