const data = {
	title: 'Query Strings',
	definition: [
		{
			word: 'Query String',
			text: `Additional conditions to an API endpoint that specifies what data should be returned.`,
			example: {
				code: `
	axios.get(\`my/cool/endpoint?user=1&profile=1\`)
	// or
	axios.get(\`my/cool/endpoint/1?include=user,profile\`)\t\t
				`,
				row: 5,
				cols: 5,
			},
		},
	],
	meaning: {
		header: 'What Does This Mean?',
		paragraphs: [
			``,
		],
	},
	choices: {
		header: 'Pros & Cons for Query String',
		sections: [
			{
				header: 'Benefits',
				links: [
					`Returns specific data`,
					`Multiple options of additional information`,
					``,
				],
			},
			{
				header: 'Difficulties',
				links: [
					`Complexity`,
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			``,
		],
		steps: [
			``,
		],
		examples: [
			{
				cols: 21,
				row: 21,
				code: `
				
				`,
				file: `API Endpoint`,
			},
			{
				cols: 21,
				row: 21,
				code: `
				
				`,
				file: `AJAX Call`,
			},
		],
	},
};

export default {
	data,
};
