const data = {
	title: 'Backend Caching',
	definition: [
		{
			word: 'Cache',
			text: 'A temporary storage space or memory that allows fast access to data.',
			example: {
				code: `
	let cache = { 
		/* Saving data in an object stored in a server */ \t\t
	};
				`,
				row: 5,
				cols: 5,
			},
		},
	],
	meaning: {
		header: 'What Does This Mean?',
		paragraphs: [
			'Caching your backend response calls allows you to make smaller queries to the database. It removes redundant ajax call to the database and returns the data that has already been queried. Saving this data makes load speed incredibly fast however can get expensive with the amount of data saved.',
			'In an ideal world, everything should be cached. This not always possible, Some examples are Facebook newsfeeds. If everything was cached the storage centers would be as big as Texas itself. So to fix this problem you cache only the last 100 posts and anything else that is already seen. For data that endlessly grows at the highest speeds you can cache the latest because what was posted on your newsfeed last year is not important on your newsfeed anymore. This should be done for endless amounts of data only. Just because you have thousands of some data objects on something important, does not mean it should not be cached. Be delegent and cache as much as you can.',
			'Storing all of your data in objects and never arrays allows you to get any piece of data with instant look ups. The keys I use when storing data is the data table name then in that object I organize any data by it\'s id. So any piece of data can be found. Lastly I store the length of that object in a property called length. This is the property I use to set offsets when querying from your database. Remember there is no need to call what\'s already been queried before. With caching on separate servers anything that was cached once between all users is now cached for life along all users. Using separate servers makes reusable cache possible.',
		],
	},
	choices: {
		header: 'Pros & Cons for Universal Rendering',
		sections: [
			{
				header: 'Benefits',
				links: [
					'Faster loading',
					'No redundant calls',
					'Smaller calls made',
					'Saved data among all users',
				],
			},
			{
				header: 'Difficulties',
				links: [
					'Storage space and costs',
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			'You have many options for backend caching. The three most popular are Redis, Memcache, or a custom object on a separate server',
			"Personally I use Redis, it's faster than Memcache and has better data structures involved to improve that speed with instant lookup time complexity. Every property stored should be in an object and never an array. With an object you can get any piece of data with an instant lookup time complexity while array's require loops to find exact data. For deployment you can make a Redis or memcache url with AWS's Elasticache. With custom object caching, the problem is Redis runs on C a lower level Object Orientated Programming (OOP) language while most popular web languages lay on top of OOP languages like C. Making the speed slower. But storing cache in an object or dictionary is the same concept you should use with Redis or Memcache.",
			"Cache is not public on the backend however it works across all users. Once one user queries the database if nothing new is made, the rest of the users will get the cache without making extra database connections. Returning cache is almost immediate on an ajax call because are not wating to query through a extremely large database to get the same data.",
		],
		steps: [
			'Setup your server\'s store sessions.',
			'Choose to use your type of cache (this example is for Redis)',
			'Set up the url for your cache (Use ElastiCache for production)',
			'Set important data in string format in Redis',
			'Retrieve data in string format and parse if needed',
		],
		examples: [
			{
				cols: 38,
				row: 38,
				code: `
	const express = require('express');
	const sess = require('express-session');
	const RedisStore = require('connect-redis')(sess);
	const redis = require('redis');
	const app = express();
	const client = redis.createClient();

	...

	app.use(sess({
		secret: 'secret',
		store: new RedisStore({ url: 'redis://localhost:6379', client: client, disableTTL: true }),\t\t
		saveUninitialized: true,
		resave: false,
		name: 'NewProject',
		cookie: {
			sameSite: true,
		},
	}));

	// Store data
	client.set('some data', dataString);

	// Get data
	client.get('some data', (error, response) => {
		// response is the cached data in string format
	});

	// Query database
	db.query({
		offset: (Cache length),
	})
	.then((response) => {
		//  if nothing return cache 
		//  else add new data to cache and return full cache
	})
				`,
				file: 'Setting Up Redis for Server Side Caching',
			},
		],
	},
};

export default {
	data,
};
