const data = {
	title: 'Error Handling',
	definition: [
		{
			word: 'Logic Errors',
			text: 'Errors due to the fact that the specification is not respected.',
			example: {
				code: `
	for (var i = 0; i < -1; i++)  {} // error\t\t
				`,
				row: 3,
				cols: 3,
			},
		},
		{
			word: 'Syntax Errors',
			text: 'Errors due to the fact that the syntax of the language is not respected.',
			example: {
				code: `
	for (variable i = 0; i < 1; i++)  {} // error\t\t
				`,
				row: 3,
				cols: 3,
			},
		},
		{
			word: 'Run-Time Errors',
			text: 'Errors that occur during the execution of a program.',
			example: {
				code: `
	const api_url_endpoint = 'api/url';
	axios.get(\`\${api_url_endpoint}\`)
		.then(response => { console.log('SUCCESS') })\t\t
		.catch(error => {
			// error handling here
		});
				`,
				row: 8,
				cols: 8,
			},
		},
	],
	meaning: {
		header: 'What should I do when errors arise?',
		paragraphs: [
			`Errors are unavoidable. As programmers, we deal with errors all the time. It's important to expect errors so when they happen, we can fix them quickly, find them easily, and understand why they happened without braking our application. No errors should be in the application. However, we can do things to catch our errors.`,
			`So first off, we should have a linter to catch any syntax errors. Webpack should pick these up immediately however some things are not caught. Having linter will catch these errors and make your code base clean and easy to read. It's very important to have a linter for a project with other developers involved.`,
			`Logic errors are hard to catch. Ways we can make sure that they don't brake the application is we can set defaults for any value that is depended on by some feature. Then you can send a console error that tells you that the default was used and that we want to find why the desired value was not used. You can set UI error handling as well if this were to happen.`,
			`Lastly, the most important error handling that is skipped all the time is run-time errors. If we have any errors from things like endpoints or ajax calls, we want to handle these errors not to break the application and to send back an error that will give us the best details possible that will tell us what happened. If data is depended on that ajax call, we want to use defaults that will come back with detailed error messages and any UI error displays that may be needed.`,
		],
	},
	choices: {
		header: 'Pros & Cons for Error Handling',
		sections: [
			{
				header: 'Benefits',
				links: [
					`Detailed information on why the error occured`,
					`Identifying where the error is`,
					`Easily able to approach the error`,
				],
			},
			{
				header: 'Difficulties',
				links: [
					`Errors exist`,
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			`Setting up error handling is pretty simplistic. You can create helper functions that display error messages, any error information provided, and setting defaults that show any UI error handling displays that may be needed.`,
		],
		steps: [
			`Display error message`,
			`Provide any error information possible`,
			`Handle UI so nothing in the application breaks due to an error`,
		],
		examples: [
			{
				cols: 11,
				row: 11,
				code: `
	database.query() 
		.then(response => { console.log('SUCCESS') })
		.catch(error => {
			res.status(404).send({
				default: {}, // value needed by UI
				errorObject: error,
				message: 'Error querying the database on endpoint: ' + thisEndpointName,
			})
		});
				`,
				file: `Endpoint Error Handling`,
			},
			{
				cols: 10,
				row: 10,
				code: `
	const api_url_endpoint = 'api/url';
	axios.get(\`\${api_url_endpoint}\`)
		.then(response => { console.log('SUCCESS') })\t\t
		.catch(error => {
			// Set default for UI
			// Display error in console
			// Display proper UI error message
		});
				`,
				file: `Ajax Call Error Handling`,
			},
			{
				cols: 18,
				row: 18,
				code: `
	let expectsObject = incomingObject || { error: true, ...dataWhichIsNeeded };\t\t
	
	...

	defaultErrorHandlingFunction(errorMessage, default) {
		console.error('Default was used for variable name: ' + errorMessage);
		return default;
	}

	<div>
		{ 
			expectsObject.error === true ?  
			defaultErrorHandlingFunction('expectsObject', expectsObject) :
			expectsObject
		}
	</div>
				`,
				file: `Default Error Handling`,
			},
		],
	},
};

export default {
	data,
};
