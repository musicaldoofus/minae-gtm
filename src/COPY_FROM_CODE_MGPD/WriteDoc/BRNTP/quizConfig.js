const quizConfig = {
	title: 'Best Reasons Not To Promote',
	conclusionText: '',
	questions: [
		{
			id: 0,
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				`Time in Role: Although Jesse led a team of 11 marketing managers and designers for Amazon.com’s Amazon Program X, Jesse is relatively new to her head of department role (6 months in role). It could be argued that Jesse has only just had time to settle in as a leader and orient her team, 5 of whom are also new to Y Organization in the past 6 months.`
			],
			feedback: {
				default: 'This example is not criteria-focused. Tenure is not a valid BRNTP. It isn’t relevant to the expectations of the role and level. It’s also not relevant to Amazon’s expectations in general. We promote for performance, not for time in role.'
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
				`Scaling Strategies: Sayid has made a number of effective process improvements for his direct team, but hasn’t shared them with other teams. An L6 needs to be able to scale strategies and expand past the immediate department. I’d like to see him do more to share his successes and help others adopt them.`
			],
			feedback: {
				default: 'This example is criteria-focused. It references the expectation that an L6 should scale strategies and expand past the immediate department, and describes Sayid’s performance relative to that expectation.'
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
		},
		{
			id: 2,
			prompt: 'Is this example criteria-focused?',
			displayContent: [
				`Simplify: In her role, Kim has dramatically expanded the capabilities of our system to benefit customers, but this has brought much greater complexity. At the next level, a Principal Economist needs to focus on advancing technologies and models that simplify existing systems.`
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
			prompt: 'Is this example objective?',
			displayContent: [
				`Developing Others: Sr. Managers are expected to play a significant role in the development of others. Despite directly managing over 20 different people in the past three years, Philip has not yet put anyone up for promotion.`
			],
			feedback: {
				default: 'This example is objective. It uses relevant facts to demonstrate that Philip has not adequately developed others.'
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
		},
		{
			id: 4,
			prompt: 'Is this example objective?',
			displayContent: [
				`Leading Meetings: Janet is responsible to lead client kickoff calls, but they usually don’t go well at all. I walk out of them feeling pretty frustrated.`
			],
			feedback: {
				default: 'This example is biased. While it references a clear job expectation, it uses personal feelings instead of relevant facts to demonstrate that the expectation isn’t being met.'
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
			id: 5,
			prompt: 'Is this example objective?',
			displayContent: [
				`Responsiveness: Adam is supposed to serve as a point of escalation to resolve campaign issues. During the launch period of Project X, there were six critical issues that were escalated to Adam. Because he wasn’t available, five of those issues missed their SLAs.`
			],
			feedback: {
				default: 'This example is objective. It establishes relevant facts to show that Adam was not a responsive point of escalation.'
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
				`Is Right, a Lot: When reviewing video scripts, Lisa has not always shown the best judgment. The last three scripts she reviewed and passed along as promising were immediately rejected by the team because they didn’t meet our bar for creativity - all being too derivative of existing videos in our portfolio.`
			],
			feedback: {
				default: 'This example is specific. It speaks to a particular job responsibility and provides relevant details about the gap.'
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
				`Customer Obsession: When it comes to customer service for our employees, Eric just isn’t meeting the bar. He could use some additional coaching in this area.`
			],
			feedback: {
				default: 'This example is not specific. It does not provide sufficient detail or examples about the gap or how it could be addressed.'
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
			id: 8,
			prompt: 'Is this example specific?',
			displayContent: [
				`Coordination: Susan does a great job of leveraging the skills of her sales team to solve problems, but on a few occasions she failed to escalate to senior leadership when she should have. If she had been more willing to go up the chain on Deal X, it’s likely we could have closed much sooner.`
			],
			feedback: {
				default: 'This example is specific. It describes the behavior and impact in sufficient detail and provides an example.'
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
			id: 9,
			prompt: 'BRNTP should describe how any gaps the employee has at the next level are being addressed. Does the example below meet that criterion?',
			displayContent: [
				`Reporting: On a few occasions, Steven failed to report on project status in a timely fashion, which led to some last minute scrambling. We spoke about it immediately after and he’s aware of the importance of reporting on time.`
			],
			feedback: {
				default: 'This example does not describe how the gaps are being addressed. While it does provide a specific example of the gap and indicate that it was discussed, it does not include specific actions the employee will take to improve.'
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
			prompt: 'BRNTP should describe how any gaps the employee has at the next level are being addressed. Does the example below meet that criterion?',
			displayContent: [
				`Learn and Be Curious: Although Lauren has excellent recruiting experience at Amazon, she’s not well versed in current research and trends outside of our business. By getting up to speed on what’s happening in the industry she could accelerate innovation in our processes. She and I have identified two conferences that she will attend this year and a recruiting community of practice she’d like to participate in.`
			],
			feedback: {
				default: 'This example describes how the gaps are being addressed. It details the specific actions Lauren will take this year to become more informed about the industry.'
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
			prompt: 'BRNTP should describe how any gaps the employee has at the next level are being addressed. Does the example below meet that criterion?',
			displayContent: [
				`Presentation and Facilitation: Lee has great technical expertise but he’s not comfortable leading large meetings or trainings. As a Solution Architect, he needs to be able to confidently deliver architecture workshops to our customers. I’ve paired him up with one of our strongest presenters so that he can shadow the next couple of workshops and then get feedback and coaching when he presents.`
			],
			feedback: {
				default: 'This example describes how the gaps are being addressed. It calls out the specific actions the manager and employee will take to help him improve his presentation skills.'
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
			id: 12,
			prompt: 'A strong BRNTP addresses or incorporates relevant promotion feedback. Does the example below meet that criterion?',
			displayContent: [
				`Two common threads run through the reasons not to promote…. The second, and subtler thread, addresses Rena’s overall presence. Jack Thorn captures it best in saying that Rena “buries her light under a bushel,” and Sonya Paul echoes the sentiment by saying that she wishes she heard more from Rena, rather than her being such a good listener. Like Jack, I agree that we should challenge Rena on being more vocal. At the same time, I don’t think that this approach blocks her from being effective or taking on larger leadership roles. If anything, I would like to see us recognize that Rena’s quiet, collaborative approach is one of the reasons that she is so successful and that there is value in a diversity of leadership styles on our team.`
			],
			feedback: {
				default: 'This example addresses promotion feedback. It identifies and discusses themes within the feedback by using direct quotes and supporting with the manager’s own observations.'
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
			id: 13,
			prompt: 'A strong BRNTP addresses or incorporates relevant promotion feedback. Does the example below meet that criterion?',
			displayContent: [
				`Many leaders indicated how much they value Jill’s work ethic and ability to deliver results with tight deadlines and limited resources. However, several feedback providers pointed out that this can take a toll on her team. Evelyn said, “She continues to succeed, but she’s also burned through several great engineers to achieve it.” Andres also suggested that, “just taking more time to listen to her team’s concerns and support them could probably improve retention on her team.” I have also observed that, despite her high output, her team satisfaction is low. We have set up time each month to review her Connections scores and set goals for improvement in that area.`
			],
			feedback: {
				default: 'This example addresses promotion feedback. It identifies and discusses a trend within the feedback by using direct quotes and supporting with the manager’s own observations.'
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
			id: 14,
			prompt: 'A strong BRNTP addresses or incorporates relevant promotion feedback. Does the example below meet that criterion?',
			displayContent: [
				`One of an Executive Assistant’s responsibilities is to set the annual calendar and identify conflicts and dependencies. Several feedback providers observed that Jim communicates key dates inconsistently and sometimes fails to resolve conflicts with other organization-wide events. Iantha said, “I’m never quite sure when talent review meetings are happening because the dates and times are constantly shifting and communication isn’t clear.” I, actually don’t think this is a problem and it shouldn’t be a blocker for his promotion.`
			],
			feedback: {
				default: 'This example does not address the promotion feedback. While the manager does note what others have said, the feedback is disregarded without any justification.'
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
	]
}

export default quizConfig;