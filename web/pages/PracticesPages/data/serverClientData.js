const data = {
	title: 'Server vs. Client Side Rendering',
	definition: [
		{
			word: 'Server Side Rendering (Isomorphic)',
			text: 'Data renders synchronously coming from your back end. Page source renders for Search Engine Optimization (SEO) so that you can start working on search engine rankings. For html tags, they load immediately on page load.',
			example: {
				code: `
		<html>
			<head></head>
			<body>
				<div id="app">
					<h1>Hello World!</h1>\t\t
				</div>
			</body>
		</html>
                `,
				row: 10,
				cols: 10,
			},
		}, {
			word: 'Client Side Rendering',
			text: 'Data renders asynchronously from the device after the page has loaded. Page source does not render however it renders on the JavaScript console\'s on the browser. Loads after the page is loaded so you have slower loading time depended on the device\'s CPU speed. However states can change on the page without refreshing the page.',
			example: {
				code: `
		<html>
			<head></head>
			<body>
				<div id="app"></div>\t\t
			</body>
		</html>
                `,
				row: 8,
				cols: 8,
			},
		}, {
			word: 'Universal Rendering',
			text: 'Render your application server side while running a parallel application client side. You get all the page source from any JavaScript application and load speed while having the asynchronous JavaScript of state changes in the application.',
			example: {
				code: `
		<html>
			<head></head>
			<body>
				<div id="app">
					<h1>Hello World!</h1>\t\t
				</div>
			</body>
		</html>
                `,
				row: 10,
				cols: 10,
			},
		},
	],
	meaning: {
		header: 'What Does This Mean?',
		paragraphs: [
			'There are three ways we can render our applications. Not matter what the framework you use or language you use, you can render your web application either client side, server side or both. The only reasons to only render server side is if JavaScript is not enabled on the browser. The only reasons to only render client side is if there is no server or you want to hide you application from the page source. If those are not your objectives it makes the most sense to render both server side and client side with universal rendering.',
			`With universal rendering you will achieve a load speed known as "God Speed". It's the fastest possible rendering of any web application currently. `,
		],
	},
	choices: {
		header: 'Pros & Cons for Universal Rendering',
		sections: [
			{
				header: 'Benefits',
				links: [
					'Faster load speed',
					'SEO friendliness',
					'Easier connection between server and client',
					'Improves loading and reloading issues',
					'Possible to make apps work without JavaScript enabled',
				],
			}, {
				header: 'Difficulties',
				links: [
					'Secure Simple XSS Hacks',
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			'',
		],
		steps: [
			'Make two entry points for your application (client & server)',
			'Render app into a string or static-markup for server side rendering',
			'Insert server side into the client side <div> tag',
			'Set all routes to be server side',
			'Insert any state management tools in window',
			'Render application routes server side',
			'Render client side application with the bundled js in <script> tag',
		],
		examples: [
			{
				cols: 11,
				row: 11,
				code: `
		<html>
			<head></head>
			<body>
				<div id="app">
					{{ Insert Server side javascript string here }}
				</div>
				<script src="webpack-client-side-bundle.js"></script>\t\t
			</body>
		</html>
				`,
				file: 'The Template/Html File',
			}, {
				cols: 6,
				row: 6,
				code: `
		ReactDOM.render(
			{{ <App /> }},
			document.getElementById('app')\t\t
		);
				`,
				file: 'Client Entry File',
			}, {
				cols: 20,
				row: 20,
				code: `
		const ReactDOMServer = require('react-dom/server');
		// Use React Router static route history for server side routes
		...

		// Express servers
		const app = new Express();
		const server = new http.Server(app)

		...

		const server_side_string = ReactDOMServer.renderToStaticMarkup( {{ <App /> }} );\t\t
		// or ReactDOMServer.renderToString

		...

		app.get('/', (req, res) => {
			res.status(200).send( {{ template with string inserted }} )
		})
				`,
				file: 'Server Entry File',
			},
		],
	},
};

export default {
	data,
};
