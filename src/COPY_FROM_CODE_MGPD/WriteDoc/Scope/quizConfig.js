const quizConfig = {
	title: 'Scope of role',
	conclusionText: '',
	questions: [
		{
			id: 0,
			prompt: 'Which example below is about the job, not the person?',
			displayContent: [
				`Kristen\'s role as Retail Vendor Manager (RVM) for X-team is complex. Kristen wields a high level of influence, and, given her strong performance, has led to measurable impact on customers and the business…`,
				`The role of Retail Vendor Manager (RVM) for X-team is complex, requires a high level of influence, and leads to measurable impact on customers and the business…`
			],
			feedback: {
				default: 'Although the promo doc is a means to communicate your employee\'s promotion readiness, Scope of Role is about the job, not the person. It is independent of the person performing the role, so there shouldn\'t be any names or performance-related details. The second example meets these criteria.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Select'
				},
				{
					isCorrect: true,
					label: 'Select'
				}
			]
		},
		{
			id: 1,
			prompt: 'Is this example specific or generic?',
			displayContent: ['The UX Designer (UXD) manages UX projects that are medium in scope and complexity with reasonable autonomy. The UXD deep dives on customer pain points across their business area, and triangulates qualitative (e.g., usability studies) and quantitative data (e.g., customer usage metrics) to support their design choices.'],
			feedback: {
				default: 'Generic – This example just repeats the Role Guidelines for the level and role. We need to know what the scope of role is for THIS specific role, not for any UXD at Amazon.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Specific'
				},
				{
					isCorrect: true,
					label: 'Generic'
				}
			]
		},
		{
			id: 2,
			prompt: 'Is this example specific or generic?',
			displayContent: ['The RVM role has a high level of complexity. The responsibility to be a Vendor Central SME requires this role to influence a large Softlines Tech team and the centralized Vendor Central team, to navigate the technical blockers and development requirements for each project, and to balance the needs of vendors, customers, and VMs in order to deliver the right results.'],
			feedback: {
				default: 'Specific – Aligns to the general expectations for the level and role (ability to work with high complexity), but specifies what that looks like in THIS specific environment. This example meets the criterion.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Generic'
				},
				{
					isCorrect: true,
					label: 'Specific'
				}
			]
		},
		{
			id: 3,
			prompt: 'Is this example specific or generic?',
			displayContent: ['L6 Senior Vendor Managers are expected to manage multiple projects effectively at the same time, demonstrate confidence and solid business understanding to influence peers and senior management across business units, to represent their category in business meetings, and to respond concisely to senior leadership call outs.'],
			feedback: {
				default: 'Generic – This example just repeats the Role Guidelines for the level and role. This could be about any Vendor Manager role at Amazon. We need to know what the scope of role is for THIS specific role.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Specific'
				},
				{
					isCorrect: true,
					label: 'Generic'
				}
			]
		},
		{
			id: 4,
			prompt: 'Which example stands on its own?',
			displayContent: [
				'This role is involved in all stages of SDLC. This person owns the requirements and roadmap for all of the SDEs on the team. They use heterogeneous technology stacks to meet business requirements. They drive development using Agile-SCRUM and object-oriented programming methods. This role is also responsible to manage micro services with a CICD pipeline.',
				'This role leads service development to manage the coordination of thousands of vehicles worldwide. They integrate existing systems with emerging technologies to build global logistics solutions for Amazon and third-party providers. This person is responsible for technical leadership, local management, and direction of multiple technology teams.'
			],
			feedback: {
				default: 'Unless you are an SDE on this team, it would be really hard to understand Example A, because it uses terms that are not universally understood and provides no context for the job responsibilities. When a reader doesn\'t know a term or name you\'re using, it\'s harder for them to process and understand your writing. Example B is better because it stands on its own. It avoids uncommon terms and acronyms, and provides supporting context, making things easier on the reader.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Select'
				},
				{
					isCorrect: true,
					label: 'Select'
				}
			]
		},
		{
			id: 5,
			prompt: 'Is this example clear and concise?',
			displayContent: ['This role manages a high degree of complexity to deliver customer innovations that delight and have huge impact. They must translate business needs into workable solutions and navigate frequent change. Given Amazon\'s rapid growth, they are often required to roll up their sleeves and get hands-on.'],
			feedback: {
				default: 'This example is sufficiently concise, but it\'s not clear because it uses phrases that could apply to any number of roles in any organization.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'Yes'
				},
				{
					isCorrect: true,
					label: 'No'
				}
			]
		},
		{
			id: 6,
			prompt: 'Is this example clear and concise?',
			displayContent: ['This role leads the engineering team for Program X. The technology involved in powering Program X encompasses the full stack of software development. This includes low level services in ordering and inventory management, app development that enables operations teams to work efficiently, and customer experience development across multiple devices, platforms, and browsers. To manage this complex system, this role leads a team of 40 technologists spread across three engineering managers and a QA manager.'],
			feedback: {
				default: 'This example is clear and concise. It has a clear format, and gets right to point. It\'s both efficient and easy to read.'
			},
			answers: [
				{
					isCorrect: false,
					label: 'No'
				},
				{
					isCorrect: true,
					label: 'Yes'
				}
			]
		}
	]
}

export default quizConfig;