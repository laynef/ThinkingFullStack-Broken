const data = {
	title: `API Documentation`,
	meaning: {
		header: `Why documentation is needed?`,
		paragraphs: [
			`Documentation is needed for big teams. Documentation may seem like a waste of time to some. However it will allow your team mates to work faster with full knowledge of how you're endpoints work. For front end developers this is essential. It takes a long time for someone to find your api route, then test it (if no seeders exist that requires creating data manually) just to find the format of the data being returned.`,
			`Documentation allows developers to pick where you got started and allows people to update anything that you might have missed or if the application changes. Documentation makes you very valuable at any company that you work for. The things all companies start to lack on are documentation and unit tests. Both are very important on enterprise applications.`,
		],
	},
	choices: {
		header: `Pros & Cons for Documentation`,
		sections: [
			{
				header: `Benefits`,
				links: [
					`Informing team members on API response data`,
					`Testing the speed of your endpoint`,
					`Required for teams splitting backend versus frontend tasks`,
				],
			},
			{
				header: `Difficulties`,
				links: [
					`Time consuming`,
				],
			},
		],
	},
	application: {
		header: `How to Implement`,
		paragraphs: [
			`There are many frameworks that make API documentation fast and easy. I use Swagger. Swagger allows you to display endpoints and get examples of the returns without too much configuration. It's apart of your Express.js middleware so there isn't too much extra code to add. It runs off it's own server so that it doesn't conflict with your code. It's also only used when running your Swagger server to read the documentation. Swagger has frameworks for most popular languages and frameworks. On this site we use Node.js for our examples.`,
		],
	},
};

export default {
	data,
};
