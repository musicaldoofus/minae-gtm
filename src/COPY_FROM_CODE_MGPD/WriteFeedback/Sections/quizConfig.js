const quizConfig = {
	title: 'Feedback sections',
	conclusionText: '',
	questions: [
		{
			id: 0,
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				`I support Yani’s promotion to L6. Yani has been a graphic designer at Amazon for over 3 years now. He has a ton of experience.`
			],
			feedback: {
				default: 'This statement is not criteria-focused because it is basing this employee’s promotion readiness on tenure. At Amazon, we promote for performance, not for time in role.'
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
			id: 1,
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				`"You lead others and set direction in the face of ambiguity." [Dive Deep] The next-generation CX for Project Y is an obvious example of setting direction in the face of ambiguity and Uma accomplished this admirably. Although there was already a UI/UX implementation, it was clear from the feedback, metric data, and identified branding that the next-generation CX needed to take a different design direction. This direction, however, was ambiguous. Uma worked diligently with product, business, customer, and technical stakeholders to understand the problems and devise appropriate solutions that were in line with the team tenets and branding goals. She reviewed the designs extensively with stakeholders, MXBRs and user testing — all of which she actively coordinated and led. The result was a refreshed design that was well-received during user testing, save for some continued challenges identified in outlining the value proposition to customers during the out-of-box experience (OOBE).`
			],
			feedback: {
				default: 'This example is criteria-focused. It references the expectation that an L6 should lead others and set direction in the face of ambiguity, and describes Uma’s performance relative to that expectation.'
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
				'Simplify: In her role, Kim has dramatically expanded the capabilities of our system to benefit customers, but these expansions have resulted in much greater complexity. At the next level, a Principal Economist needs to focus on advancing technologies and models that simplify existing systems.'
			],
			feedback: {
				default: 'This example is criteria-focused. It establishes that the role must be able to focus on advancing technologies and models that simplify existing systems, and explains how that criteria has not yet been met.'
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
			id: 3,
			prompt: 'Which example below is objective?',
			displayContent: [
				`[Earns Trust] Tim is one of the most sincerely open-minded people I have met. When I brought up the idea of completely changing the audit process to go from supplier-level to ASIN-level testing, despite it being completely disruptive to the way we have always done the audit process, Tim genuinely listened and asked great questions to understand the rationale for the change. He continued to dive deeper into the idea with his team and organized a meeting for me to respond to his team's concerns while staying neutral throughout the process. This example and many other instances have given me a lot of trust in Tim’s ability to evaluate and implement ideas in an unbiased way.`,
				`Leading Meetings: Janet is responsible to lead client kickoff calls, but they usually don’t go well at all. I walk out of them feeling pretty frustrated.`
			],
			feedback: {
				default: 'Example A is objective. It describes relevant examples to support the feedback provider’s perspective of this employee’s ability to Earn Trust. Example B is biased. While it references a clear job expectation, it uses personal feelings instead of relevant facts to demonstrate that the expectation isn’t being met.'
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
			id: 4,
			prompt: 'Is this example specific?',
			displayContent: [
				`Customer Obsession: When it comes to customer service for our employees, Eric just isn’t meeting the bar. He could use some additional coaching in this area.`
			],
			feedback: {
				default: 'This RNTP example is not specific. It does not provide sufficient detail or examples about the gap or how it could be addressed. Eric’s manager could not take meaningful action on this feedback because it isn’t clear how Eric is failing to meet the bar. If it’s not clear what he’s doing wrong, he can’t correct the behavior.'
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
			id: 5,
			prompt: 'Is this example specific?',
			displayContent: [
				`Amir goes above and beyond in terms of Ownership. Recently, we were working with the Country X team on setting up the initial set of POs for the launch offer. Timelines were short, and we were behind on some critical configurations needed to support cutting POs. The first person I put on the calendar invite for the problem-solving session was Amir, not only for his subject matter knowledge, but also because I knew he would do everything in his power to solve this issue even though it was not his to own. As expected, Amir took the lead, working a multi-functional and multi-org team through a set of options and solutions. Over the course of two short meetings, the issue was resolved. Without his assistance, this would have taken much longer to solve and we may have missed our target launch.`
			],
			feedback: {
				default: 'This RTP example is specific. It describes the situation, the employee’s behavior, and the resulting impact their performance had on the business.'
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
			prompt: 'Is this example specific?',
			displayContent: [
				`Disagree and Commit – Priya speaks her mind freely when she disagrees with a course of action. On Prime Day, there was significant discussion about whether we should send a second push notification alerting customers to Event X. Our business development manager was getting pressure from the studio saying they were not sure there was enough buzz about Event X, so he proposed sending another push notification. Priya argued strongly on behalf of customers who may have seen the first notification and decided they were not interested in Event X, making the point that we need to have a high bar for the push notification channel. When Priya and the team sought and found a previous experience where a second notification had significantly increased adoption, they decided to remind customers again. Priya committed to the strategy without further argument.`
			],
			feedback: {
				default: 'This RTP example is specific. It describes the situation, the employee’s behavior, and the resulting impact their performance had on the business.'
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
			id: 7,
			prompt: 'Is this example specific?',
			displayContent: [
				`Coordination: Susan does a great job of leveraging the skills of her sales team to solve problems, but on a few occasions she failed to escalate to Sr. Leadership when she should have. If she had been more willing to go up the chain on Deal X it’s likely we could have closed much sooner.`
			],
			feedback: {
				default: 'This RNTP example is specific. It describes the behavior in sufficient detail and provides an example. Susan’s manager can take meaningful action on this feedback.'
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
			id: 8,
			prompt: 'Which example below stands on its own?',
			displayContent: [
				`Deliver Results – Joaquin knows his realm very well, but he struggles to keep up with the fast pace of Amazon. Instead of holding on to traditional ADDIE, I’d like to see him open his mind up and try using LLAMA.`,
				`Dive Deep – In my 2 years on this team, I have not seen Toni present at any of our WBRs (weekly business reviews). I would love to see Toni share her knowledge or deep dive findings with the broader team.`
			],
			feedback: {
				default: 'Unless you’re in the learning development field, you probably don’t know what the acronyms in Example A are referring to. They are industry-specific and not broadly known by Amazonians. Example B stands on its own. Actually, Example B could probably get away with not spelling out the “WBR” acronym. Most Amazonians are familiar with it, but some might not be. If you’re unsure, it’s always better to play it safe than risk making things harder for the reader.'
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
			id: 9,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				`My biggest feedback for Keenan is ensuring he is exercising appropriate backbone (Have Backbone, Disagree and Commit). Keenan has a very pleasant demeanor and is a collaborator to start. He needs to be comfortable pushing back where warranted.`
			],
			feedback: {
				default: 'This RNTP is concise, but it isn’t clear. How is Keenan’s pleasant demeanor preventing him from exercising appropriate backbone? The reader has to assume that they are even correlated. Without a specific example to support the claim, this feedback is also biased.'
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
			id: 10,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				`Wendy demonstrates a level of customer obsession I don't often see in SDMs, even at an L7 level. Working through regulatory restrictions for Project X had resulted in a non-intuitive CX for customers. Wendy refused to accept sub-par proposals from her team and pushed equally hard on both PM and Tech to simplify the CX for customers. It was obvious that Wendy had internalized her past experiences with Org X and Org Y to develop an intuitive feel for what would work for customers and what wouldn't. Her insistence on raising the CX bar resulted in several innovations (like toggling auto-renewal based on a customer’s preferred payment instrument). The solution she helped define has informed not only how Project X was built but also new services for Org Z and Org W.`
			],
			feedback: {
				default: 'This RTP example is clear and concise. The first sentence shows the reader what the paragraph is intended to show. It then tells a simple and complete story, establishing the situation, actions taken, and the outcome. All of the details in the paragraph serve to support the initial statement.'
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
			id: 11,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				`My primary concern with supporting this promotion is that I have not seen evidence of Ray’s ability to lead teams to deliver large, complex projects. Ray has shown ample evidence of individually taking complex technical tasks and coming up with high quality, robust solutions. However, I have not seen him take the lead on a project of significant scope that requires delegating subtasks and subprojects to other engineers. The ability to serve as the central owner of a project while guiding others to deliver it is an important aspect of the SDE3 role, and I have not yet seen this from Ray. Similarly, I would like to see Ray take a more active role in hiring and mentoring. The team would significantly benefit from him sharing his technical expertise, and he would benefit from gaining experience with identifying talent in coworkers and prospective employees and helping to grow that talent.`
			],
			feedback: {
				default: 'This RNTP isn’t clear or concise. The feedback provider twice states that they haven’t seen Ray take the lead on a complex project. Repetitive statements add unnecessary work for the reader. This example isn’t very clear either. It begins with a reference to the SDE3 expectation for leading teams, then demonstrates that the expectation isn’t being met (Ray is executing well individually, but not leading others). However, there’s a secondary point at the end about hiring and mentoring. The provider says they want to see Ray take a more active role in this area, but it isn’t clear whether or not this is an expectation for SDE3s. It’s also not clear whether this provider has had opportunities to observe a lack of hiring and mentoring in Ray’s behavior. Has Ray been doing this and this feedback provider doesn’t have visibility? Or has the feedback provider seen Ray miss opportunities to do this?'
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
			id: 12,
			prompt: 'Is this example clear and concise?',
			displayContent: [
				`Have Backbone; Disagree and Commit: Henry’s friendly and approachable disposition, as well as his willingness to take on many challenges, are key qualities that have led to his success at Amazon. That said, as noted by Amazon’s Leadership Principles, leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Henry has occasionally acquiesced to requests or direction in meetings that later in casual conversations he mentioned he didn’t agree with (Project X redesign, for a recent example). Many times at Amazon we have to hold hands and move in a difficult direction, but it’s critical that our leaders vocalize when they disagree with aspects of the strategy. Henry is seen as a thought leader on the team, and the entire business would benefit from his thoughts on direction, especially when he has a differing opinion. I’ve given Henry this feedback and have seen some recent improvements, so I think this is coachable and not a blocker for promotion to the next level.`
			],
			feedback: {
				default: 'This RNTP example is clear and concise. The label at the beginning clearly states for the reader what the paragraph is intended to show. It provides sufficient context and examples to support the RNTP. It’s specific enough for the manager to take meaningful action on this feedback, but it doesn’t include unnecessary details, keeping this feedback crisp and easy to read.'
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
	]
}

export default quizConfig;