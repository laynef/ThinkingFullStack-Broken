const sidebar = [
	{
		title: `Best Practices`,
		links: [
			{
				route: `/practices/multiple/devices`,
				name: `Handling Multiple Devices`,
			},
			{
				route: `/practices/both/sides`,
				name: `Backend Vs. Frontend`,
			},
			{
				route: `/practices/normalize`,
				name: `Normalizing Data`,
			},
			{
				route: `/practices/server/client`,
				name: `Server Side Vs. Client Side`,
			},
			{
				route: `/practices/reusable`,
				name: `Reusable Code`,
			},
			{
				route: `/practices/environments`,
				name: `Setting Up Environments`,
			},
		],
	},
	{
		title: `Deployments`,
		links: [
			{
				route: `/aws/services`,
				name: `Understanding AWS Services`,
			},
			{
				route: `/aws/no/third/parties`,
				name: `Why Not Docker or Heroku?`,
			},
			{
				route: `/aws/cdn`,
				name: `Using CDNs`,
			},
			{
				route: `/aws/scaling`,
				name: `Making Your Site Scalable`,
			},
			{
				route: `/aws/assets`,
				name: `Handling Assets`,
			},
			{
				route: `/aws/balancing`,
				name: `Handling Load Balancing`,
			},
			{
				route: `/aws/database`,
				name: `Handling Your Database`,
			},
			{
				route: `/aws/compression`,
				name: `Handling Compression`,
			},
			{
				route: `/aws/storage`,
				name: `Handling File Storage`,
			},
			{
				route: `/aws/uploads`,
				name: `Handling File Uploads`,
			},
			{
				route: `/aws/offline`,
				name: `Offline Web Applications`,
			},
			{
				route: `/aws/time`,
				name: `Handling Loading Time`,
			},
			// {
			// 	route: `/aws/linux`,
			// 	name: `Understanding Linux Servers`,
			// },
			{
				route: `/aws/http`,
				name: `HTTP vs. HTTPS`,
			},
		],
	},
	{
		title: `UI/UX Design`,
		links: [
			{
				route: `/ui/for/all/users`,
				name: `Design for All User Levels`,
			},
			{
				route: `/ui/reusable`,
				name: `Reusable Styling for All Devices`,
			},
			{
				route: `/ui/devices`,
				name: `Designing per Device`,
			},
			{
				route: `/ui/cross/browsers`,
				name: `Cross Browser Styling`,
			},
			{
				route: `/ui/state`,
				name: `Handling State Management`,
			},
			{
				route: `/ui/caching`,
				name: `Front End Caching`,
			},
			{
				route: `/ui/assets`,
				name: `Handling Assets`,
			},
			{
				route: `/ui/components`,
				name: `Component Based Techniques`,
			},
			{
				route: `/ui/lite`,
				name: `Develop Lite`,
			},
		],
	},
	{
		title: `API Design`,
		links: [
			{
				route: `/api/universal/design`,
				name: `Universal API Design`,
			},
			// {
			// 	route: `/api/separate/design`,
			// 	name: `Separate API Design`,
			// },
			{
				route: `/api/caching`,
				name: `Back End Caching`,
			},
			{
				route: `/api/scalable`,
				name: `Scability`,
			},
			{
				route: `/api/documentation`,
				name: `Doumentation for Teams`,
			},
			{
				route: `/api/websockets`,
				name: `Websockets`,
			},
			{
				route: `/api/errors`,
				name: `Error Handling`,
			},
			// {
			// 	route: `/api/proxies`,
			// 	name: `Proxies`,
			// },
			{
				route: `/api/query/strings`,
				name: `Query Strings`,
			},
			{
				route: `/api/cryptology`,
				name: `Cryptology`,
			},
		],
	},
	{
		title: `Strictly Coding`,
		links: [
			{
				route: `/patterns/languages`,
				name: `Language Patterns`,
			},
			{
				route: `/patterns/data/structures`,
				name: `Using Data Structures`,
			},
			{
				route: `/patterns/error/handling`,
				name: `Error Handling`,
			},
			{
				route: `/patterns/optimize`,
				name: `Optimization`,
			},
			{
				route: `/patterns/clean/code`,
				name: `Clean Code Techniques`,
			},
			{
				route: `/patterns/lower/levels`,
				name: `Render At Lower Levels`,
			},
		],
	},
	{
		title: `Business Side`,
		links: [
			{
				route: `/business/web/business`,
				name: `Types of Web Businesses`,
			},
			{
				route: `/business/needs`,
				name: `Excel Business Needs`,
			},
			{
				route: `/business/git/workflow`,
				name: `Git Workflow`,
			},
			{
				route: `/business/separate/code/base`,
				name: `Separating Code Base`,
			},
			{
				route: `/business/environments`,
				name: `Enterprise Environments`,
			},
			{
				route: `/business/seo`,
				name: `Understanding SEO`,
			},
			{
				route: `/business/marketing/tools`,
				name: `Marketing Tools`,
			},
			{
				route: `/business/cut/costs`,
				name: `Cut Costs, Not Quality`,
			},
			{
				route: `/business/no/cutting/corners`,
				name: `Don't Cut Corners`,
			},
			{
				route: `/business/proactive`,
				name: `Proactive vs. Reactive`,
			},
			{
				route: `/business/never/assume`,
				name: `Never Assume`,
			},
			{
				route: `/business/time/costs`,
				name: `Time Costs & Builds`,
			},
			{
				route: `/business/develop`,
				name: `Develop Timely`,
			},
			{
				route: `/business/flows`,
				name: `Build Flows`,
			},
			{
				route: `/business/scrum`,
				name: `Scrum`,
			},
		],
	},
	// {
	// 	title: `Examples`,
	// 	links: [
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Chat Text Messaging`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Chat Video Messaging`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Chat Audio Messaging`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Live Video Chat`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Live Audio Voice Calls`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Friends Model`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Followers Model`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Elastic Search`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Image Uploads`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `All File Uploads`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Geo-coding`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Report Inapproiprate Behavior`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Shopping Carts`,
	// 		},
	// 		{
	// 			route: `/dashboard`,
	// 			name: `Notifications`,
	// 		},
	// 	],
	// },
];

const openState = {
	'Best Practices': false,
	'Deployments': false,
	'UI/UX Design': false,
	'API Design': false,
	'Strictly Coding': false,
	'Business Side': false,
	// `Examples`: false,
};

export default { sidebar, openState };
