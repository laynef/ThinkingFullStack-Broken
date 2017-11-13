const axios = require('axios');
const config = require('../config/config');

axios.post(`${config.apiUrl}/api/v1/auth/local/register/admin`, {
	email: 'admin@email.com',
	password: 'pass1234',
})
	.then(() => {
		console.log(`ADMIN SIGN UP SUCCESS`);
	})
	.catch(() => {
		console.log(`ADMIN SIGN UP ERROR`);
	});

axios.post(`${config.apiUrl}/api/v1/auth/local/register/guest`, {
	email: 'guest@email.com',
	password: 'pass1234',
})
	.then(() => {
		console.log(`GUEST SIGN UP SUCCESS`);
	})
	.catch(() => {
		console.log(`GUEST SIGN UP ERROR`);
	});

axios.post(`${config.apiUrl}/api/v1/auth/local/register/visitor`, {
	email: 'red@email.com',
	password: 'pass1234',
})
	.then(() => {
		console.log(`VISITOR SIGN UP SUCCESS`);
	})
	.catch(() => {
		console.log(`VISITOR SIGN UP ERROR`);
	});

