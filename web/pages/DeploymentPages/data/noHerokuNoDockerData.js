const data = {
	title: 'Why You Should Not Use Docker, Heroku, or Other Third Services',
	meaning: {
		header: 'Why You Should Only Use AWS Stacks',
		paragraphs: [
			'Heroku and Docker are great tools that are based on AWS. All of their services are already on AWS. Heroku uses the same commands as the AWS Cli. When you use Heroku you are paying for the fixed configuration and the easy to use Git commands. These things are already setup with AWS. You can change the configurations on Heroku however then you are customing your AWS configurations on Heroku. Heroku makes you pay for the AWS service and their extra charge for their own custom commands.',
			'Docker is a third party service that has you use AWS directly with their custom configurations that they are to your AWS account. They provide many visual tools however none of these services are required. When you use fixed configurations you lose the ability to customize your deployments to fit your specific needs and manage your own budgets at the lowest price possible. These tools are great but not needed.',
		],
	},
	choices: {
		header: 'Pros & Cons for the AWS Stack',
		sections: [
			{
				header: 'Benefits',
				links: [
					'Less expensive',
					'Faster speeds with custom configurations',
					'Configured to tailor your applications needs',
					'The most control over your deployments',
				],
			},
			{
				header: 'Difficulties',
				links: [
					'Learn the AWS Services individually that you need',
				],
			},
		],
	},
	application: {
		header: 'How to Implement',
		paragraphs: [
			`Every site needs it's own needs when it comes to services. It's smart to start with the lowest prices needed. AWS has everything you need to make your website. Everything from the technology cloud services to the domain. There's no need to out source until you start reaching the amount of users where you set up your own services like other big companies like Facebook or Google.`,
		],
		steps: [
			'Create an AWS account',
			'Learn about pricing',
			'Learn free tier services',
			'Understand each service',
			'Use what\'s needed for your needs',
		],
	},
	ending: 'Welcome to the AWS Stack! Happy Coding!',
};

export default {
	data,
};
