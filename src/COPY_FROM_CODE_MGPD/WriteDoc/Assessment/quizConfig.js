const quizConfig = {
	title: 'Promotion assessment',
	conclusionText: '',
	questions: [
		{
			id: 0,
			prompt: 'Which example below sounds like an objective and balanced assessment?',
			displayContent: [
				`There is no playbook for this business, especially on the logistics and operational components, and Jim’s amazing thought leadership on solving for scale has set an almost unreachable bar for the broader team. Jim entirely owned the holistic analytical activity and totally revolutionized how we need to think about offers being cancelled due to unforeseen and unplanned events. These variables included weather, acts of god, unforeseen issues, etc. Jim’s flawless analysis estimated the percentage of offer days that will be cancelled due to various reasons, including inventory delays, truck maintenance, weather and Amazon system issues. The initial modeling of this was built in advance of our national launch, with only limited data baselined through Q1 2017. His predictions have been practically perfect!`,
				`One example of Sarah’s ability to Deliver Results is when she identified the opportunity to improve the Weekly Business Review (WBR) preparation process. Independently, Sarah recognized that the influx of new WBR reporting coupled with the addition of new team members, resulted in team members spending ~3 hours/week preparing for and/or training others on how to prepare for WBR. Sarah created an SOP as well as an FAQ doc that clearly directed/guided Vendor Managers on where to locate reporting, how to leverage the reporting and how to write an effective WBR summary. Initially, Sarah missed an opportunity to think even bigger, because the SOP and FAQ were only available to members of her team. After several successful weeks, other teams eventually caught wind of the resources and asked to use them as well. Sarah’s WBR training was scaled to the organization and resulted in savings of 1+ hours of workload weekly.`
			],
			feedback: {
				default: 'Example A does not read as an objective and balanced assessment because of the use of exaggerated terms like ‘flawless’ and ‘practically perfect’. Example B meets the criteria. It avoids the use of subjective terms, and acknowledges relevant misses.'
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
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				'At an L7, the Product Manager must be able to influence across the organization and the company. On Project W, Sofia influenced the entire organization by mapping the end-to-end process for running offers. Once she completed the extensive mapping exercise, she held daily meetings with all stakeholders (Biz Dev, Ops, Tech, Design, Marketing, Real Estate, etc.) to ensure everyone was aligned on the process and that there were no gaps in development. Multiple tech teams were working on their own milestones and goals for the scale release in July. Sofia recognized the importance of each team being aligned on the total scope, workflows, system interfaces and communication between components. One SDM on the team remarked that this effort was critical in identifying gaps between teams and workflows and in getting all parts of the business on the same page. The Sr. UX designer on the team had the following to say about this effort: “Sofia developed a complex diagram of the Project W business and how its parts relate to one another to operate successfully. Creating this diagram and discussing with all leaders on the team, Sofia identified the proper owners, and established next steps for closing the gaps we hadn’t previously known were even there.”'
			],
			feedback: {
				default: 'This example is criteria-focused. It clearly states the criteria in the first sentence. The subsequent sentences serve to illustrate how it was met, using a relevant example.'
			},
			answers: [
				{
					isCorrect: true,
					label: 'Yes'
				},
				{
					isCorrect: false,
					label: 'No'
				}
			]
		},
		{
			id: 2,
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				'One of Ryan’s biggest projects was his revamp of the audit program. Ryan was tasked with increasing Audit coverage at scale. The original program tested 100% of all Retail and suppliers (~2,200). However, the tested ASINs only accounted for about 2% of shipped units leaving Amazon exposed to customer trust issues and FTC fines ($10K per day, per defect). Ryan worked with his team to restructure the program to improve audit coverage from 2% of shipped units in 2016 to an estimated 68% in 2017 without increasing the QA budget in 2017 (flat to 2016 at $1.6M). New program enhancements included targeted coverage of top-PQ-defect sellers, and top-GMS and top-ASP ASINs. Forecasted 2017 application revenue will increase +255% YoY to $2.5M (net of higher fees and reduced application volumes), exceeding the QA operational budget of $1.6M.'
			],
			feedback: {
				default: 'This example is not criteria-focused. It presents solid data to emphasize the impact of the employee’s efforts, but it’s unclear what job-level expectations the example is intended to illustrate. This makes it difficult for the reader to evaluate promotion readiness.'
			},
			answers: [
				{
					isCorrect: true,
					label: 'No'
				},
				{
					isCorrect: false,
					label: 'Yes'
				}
			]
		},
		{
			id: 3,
			prompt: 'Is this example specific enough to show the employee’s impact?',
			displayContent: [
				'Jerry has demonstrated the leadership, cross-team impact, and innovation to merit promotion to Level 6, and is already operating at this level today (often mistaken/assumed as such among others). He has strong support across his primary partners, including Data Science, Engineering, Product, CST, Sales and Finance. His strengths in Think Big, Invent and Simplify, Ownership, Bias for Action, and Hire and Develop will pave the road for him to continue to excel in his career at Amazon.'
			],
			feedback: {
				default: 'Not specific. The paragraph starts out with three strengths, but doesn’t give any examples of how those have been demonstrated. Even more strengths are tagged on at the end, again with no evidence to support. There’s not enough detail to see the impact this employee’s performance has had on the business.'
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
			id: 4,
			prompt: 'Which example stands on its own?',
			displayContent: [
				'In January of 2015, Maurice recognized a significant opportunity to move faster in supporting new payment methods for digital properties. Teams at Amazon generally rely on X organization to support new payments use cases, such as external partner integration, and new payment methods like mobile carrier billing (MCB). That organization was not scaled to handle the volume of project requests they received from client teams and began socializing a decentralized model that enabled other organizations to innovate on top of their platform. Maurice seized this opportunity and wrote a vision and roadmap document with a headcount proposal that he eventually presented to the Sr. Vice President and his staff for approval. The document outlined how this newly formed team would be organized – a dev team to build on top of the payments platform and a TPM team to run point on cross-organizational collaboration, both reporting up through Maurice. The proposal was approved, and the new team was formed. Success in creating and running this organization required Maurice to work effectively with other technical leaders, influence other team roadmaps, reach consensus on approach/prioritization, and deliver software successfully. This team would go on to deliver Project X integration (a ubiquitous payment method in Country X), Team Y payment fixup, and a thorough increase of 127% from third party Country Y payment processors that enabled high velocity promotions in the Country Y marketplace.',
				'In July of 2016, Tina was asked step up into the Head of Team X role when her manager moved to a new role. When Tina took on this team leadership role, no progress had been made against the first three S-Team/A-Team goals coowned by Team A and Team B. At the same time, she onboarded and accelerated the ramp up of three new team members. Under her leadership, Tina’s new team focused on these goals as well as key conference deliverables, closing the gap and navigating a path to green in just two months, and by December they met all three goals, demonstrating an ability to manage a team to Deliver Results.'
			],
			feedback: {
				default: 'Example A stands on its own. It provides context to help the reader understand the situation, explains potentially unfamiliar terms, and provides details about the solution. Example B does not stand on its own. It provides no explanation of the S-Team goals referenced, assuming the reader knows what they are, and does not explain what actions led to the team meeting those goals.'
			},
			answers: [
				{
					isCorrect: true,
					label: 'Select'
				},
				{
					isCorrect: false,
					label: 'Select'
				}
			]
		},
		{
			id: 5,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				'Jane’s dual strengths of Ownership and Bias for Action are further evidenced by how she engages with the Y Team. In Q3 2016, Jane worked cross-functionally with the marketing, PR, Y Team, and site merchandising teams to support Brand X’s gateway launch. Jane proactively ensured that key styles were in stock and available to sell, and provided metrics to both internal and external teams on the launch’s successes and lessons learned. During launch week, Brand X was the top-selling brand in its category, with $78k in sales, 200 units sold, 14% sell-through, and a 58% margin. Jane also identified and shared buying-side learnings with all stakeholders to improve future launches of high-profile brands. The Y Team took note of how she owned the end-to-end success of the strategy, and now regularly engages Jane in strategic discussions. Recently, they solicited Jane’s input to create a nine-block matrix to outline brand adjacencies and isolate potential acquisition targets. To supplement this matrix, Jane created a brand onboarding timeline that specified the developmental milestones necessary for a brand to scale effectively on Amazon. The outcome of these activities was a consistent onboarding experience for new brands on Amazon and enhanced visibility into key onboarding milestones for the people who are managing that process directly, neither of which existed previously.'
			],
			feedback: {
				default: 'This example is clear and concise. The first sentence states what the paragraph is intended to show. It then tells a simple and complete story, establishing the situation, actions taken, and the outcome. All of the details in the paragraph serve to support the initial statement.'
			},
			answers: [
				{
					isCorrect: true,
					label: 'Yes'
				},
				{
					isCorrect: false,
					label: 'No'
				}
			]
		},
		{
			id: 6,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				'Seamus took ownership and delivered several impactful projects. He led the development of the systems that enabled forward, and reverse tax calculation for US Sales Tax, and EU VAT, including a new service that integrated with the retail tax system, and a new Tax Provider in the Bill Orchestration system. Seamus migrated legacy tax functionality onto the new systems, and launched it in production. Having one of the longest tenures in the organization (5+ years), Seamus has been exposed to multiple teams and therefore has a really broad scope of technical knowledge of the platform’s services, particularly when it comes to tax rules, business logic, integration points, and testing. He started the vision of a separate tax-dedicated team, and has been thinking big about exposing calculation as a service to AWS resellers, and other large AWS customers. The tax systems designed, and built by Seamus have been in production for over 2 years, and allow for AWS to correctly collect tax from AWS customers in US, EU, Japan, China, and India. In 2014, Seamus started work on designing the new iteration of the billing repository, which is currently a system that relies on relational MySQL storage, which makes it a challenge in terms of scale and throughput. Bill Manager uses 32 logical MySQL partitions that are divided across multiple physical hosts, creating multiple points of failure. The new design intended to transition the repository onto the non-relational storage system, and leverage the existing AWS services (Kinesis, DynamoDB, S3) to reduce operational load. The design took multiple iterations, and suffered from constant scope creep. During the design phase, Seamus was also actively involved in other critical projects. Seamus served as a design mentor to 3 SDEIs, who all completed their design successfully, and had uneventful design reviews with senior engineers. Seamus completed his design in 2015, successfully passing Principal Engineers’ review in March. Seamus is the main contributor when it comes to establishing strategic direction of the team. He actively participates in OP1 planning, identifying large projects that are intended to benefit the team, and the platform. In 2014, he helped to break-down EU VAT into defined, parallelizable threads that defined the initial scope of the project.'
			],
			feedback: {
				default: 'This example is not clear or concise. The paragraph does not have a stated purpose. It includes a number of different examples that fail to relate to a common theme. The included examples lack sufficient detail for the reader to understand how they demonstrate the candidate’s readiness for promotion.'
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
		}
	]
}

export default quizConfig;