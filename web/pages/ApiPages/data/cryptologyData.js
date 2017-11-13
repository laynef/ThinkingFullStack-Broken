const data = {
	title: 'Cryptology Basics',
	definition: [
		{
			word: 'Hashing',
			text: 'Hashing is when you scramble a string into something that is no longer recognizable yet is unique. There are many different kinds of hashing functions some decode the hash and some just hash the given input the same way and match the hash to see if it\'s true or false.',
			example: {
				code: `
	password: $ac83mSnSkd0ow2 // when the user types plain text "password"\t\t
				`,
				row: 3,
				cols: 3,
			},
		},
	],
	meaning: {
		header: 'Things You Need To Know',
		paragraphs: [
			'Hashing functions are the basics of encryption. The hashing functions can get very complex. It\'s important to understand how these work for web tokens on api routes and hashing passwords in your database. Passwords must be hashed just in case your database gets hacked, you will keep the the user\'s login protected. Any important data that should never be revealed should be hashed. Below are based hashing functions that show you how they work.',
			'The most popular cryptography library is OpenSSL. There are many different formats you can use to hash strings. The most popular is SHA-256 however you can find the ones best for you and our project. Many popular backend frameworks incorparate OpenSSL. In our examples, we use Node.js which uses Crypto that includes OpenSSL in it\'s hashing functions.',
			'Your api routes should be encrypted with web tokens so that outside hackers can\'t use api routes without being on your application using the api routes in ways that we unintented. It\'s important to keep your api and database secure from any potential hackers. Think about all the ways someone could break into your data and secure each hole because if you get big enough, someone will try all of those pitholes.',
		],
	},
	choices: {
		header: 'Pros & Cons for Encryption',
		sections: [
			{
				header: 'Benefits',
				links: [
					'Hiding secret data',
					'Secure data',
				],
			},
			{
				header: 'Difficulties',
				links: [
					'Slow functions to secure or retrieve data',
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			'When hashing there is one more step to make your hashes harder to crack. If you add a random string where in the original string before it\'s hashed, you just made it harder for someone to figure out your hashing function. These added strings are called salts and they are very important in hashing your data.',
			'Wether to use a matching hash function or a decoding hash function is up to you. If there is data that you want to retrieve the original value, then it\'s important to use a decoding function. If not use a matching hash function because it is not worth allowing that data to be discovered.',
		],
		steps: [
			'Choose your style of hashing function',
			'Setup a salt that can be saved for that specific hash',
			'Make reusable functions for your hashes',
			'Hash each character in the plain text',
			'Setup a decode or verify reusable function',
			'On your storing of that plain text, hash before you store in the database',
			'On getting that data, verify they are the same or decode the data',
		],
		examples: [
			{
				cols: 25,
				row: 25,
				code: `
	const functions = {
		hash: (plainText) => {
			let salt = 'my_secret_salt';
			let hashed = '';
			plainText += salt;
			for (let i = 0; i < plainText.length; i++) {
				hashed += plainText[i].toString(16);
			}
			return hashed;
		},
		verify: (hash, plainText) => {
			let sameHashFunction = (plainText) => {
				let hashed = '';
				let salt = 'my_secret_salt';
				plainText += salt;
				for (let i = 0; i < plainText.length; i++) {
					hashed += plainText[i].toString(16);
				}
				return hashed;
			};
			return hash === sameHashFunction(plainText);\t\t
		}
	};
				`,
				file: 'Matching Hashing Functions',
			},
			{
				cols: 21,
				row: 21,
				code: `
	const functions = {
		hash: (plainText) => {
			let hashed = '';
			let salt = 'my_secret_salt';
			plainText += salt;
			for (let i = 0; i < plainText.length; i++) {
				hashed += plainText[i].toString(16) + ',';\t\t
			}
			return hashed;
		},
		decode: (hash) => {
			let array = hash.split(',');
			let string = '';
			for (let i = 0; i < array.length; i++) {
				string += parseInt(array[i], 16);
			}
			return string.replace(/my_secret_salt/ig, '');\t\t
		}
	};
				`,
				file: 'Decoding Hashing Functions',
			},
			{
				cols: 15,
				row: 15,
				code: `
	const crypto = require('crypto');

	const functions = {
		hash: (plainText) => {
			const hash = crypto.createHash('sha256');
			hash.update(planText);
			return hash.digest('hex');
		},
		verify: (hash, plainText) => {
			const verify = crypto.createVerify('SHA256');\t\t
			return verify.verify(hash, plainText);
		}
	};
				`,
				file: 'OpenSSL Hashing Functions',
			},
		],
	},
};

export default {
	data,
};
