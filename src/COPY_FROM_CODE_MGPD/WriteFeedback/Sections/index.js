import React, { Component, Fragment } from 'react';
import Accordion from '../../../Common/Accordion';
import NestedAccordion from '../../../Common/Accordion/NestedAccordion';
import Quiz from '../../../Common/Quiz';
import quizConfig from './quizConfig';

class Sections extends Component {
	constructor(props) {
		super(props);
		this.state = {
			criteriaShowRTP: true,
			alignedShowRTP: true,
			objectiveShowRTP: true,
			specificShowRTP: true,
		};
		this.handleToggleShowRTP = this.handleToggleShowRTP.bind(this);
	}

	handleToggleShowRTP(type) {
		if (type === 'criteria') this.setState({criteriaShowRTP: !this.state.criteriaShowRTP});
		if (type === 'aligned') this.setState({alignedShowRTP: !this.state.alignedShowRTP});
		if (type === 'objective') this.setState({objectiveShowRTP: !this.state.objectiveShowRTP});
		if (type === 'specific') this.setState({specificShowRTP: !this.state.specificShowRTP});
	}

	render() {
		return (
			<div className="container-with-TOC">
				<div>
					<h2>Feedback sections</h2>
				</div>
				<div>
					<p>
						To help you provide a balanced perspective on an employee’s promotion readiness, there are two sections to promotion feedback:
					</p>
					<ol>
						<li>
	    					Reasons to Promote — In the interactions you’ve had with this employee, how have they demonstrated next-level performance?
						</li>
						<li>
	    					Reasons Not to Promote — What areas will this employee need to grow in to be successful at the next level?
						</li>
					</ol>
					<p>
						You’ll use the <b>Reasons to Promote (RTP)</b> section to provide specific examples that highlight how this employee demonstrates the performance and skills required for the proposed promotion level and role. In the interactions you’ve had and results you’ve seen from this employee, how have they demonstrated next-level performance?
					</p>
					<p>
						Next, you’ll use the <b>Reasons Not to Promote (RNTP)</b> section to describe the areas where the employee needs to grow to be successful at the next level. Keep in mind that all employees will have areas for growth at the next level. Providing RNTP gives balance to your perspective. It shows that you have thoughtfully weighed all the evidence before making your decision. Identifying the areas an employee should work on is useful, both to show that you’ve evaluated them fully, and to help the employee improve in the future.
					</p>
					<div>
						<p>
							Note: Regardless of whether you support this promotion, all promotion feedback must include RTP and RNTP. If you’re providing feedback, it’s your responsibility to provide a balanced assessment.
						</p>
					</div>
				</div>
				<Accordion
					id="basics-accordion"
					headerText="Section basics"
					>
					<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
						<div style={{borderRight: '1px solid #EEF5F6'}}>
							<h3><em>What goes into the RTP section:</em></h3>
							<ul>
								<li>
									<b>Examples of next-level performance.</b>
									<br/>
									Describe how the employee is already performing at the next level in their current role.
								</li>
							</ul>
						</div>
						<div>
							<h3><em>What goes into the RNTP section:</em></h3>
							<ul>
								<li>
									<b>Areas for growth at the next level.</b>
									<br/>
									Describe the areas where the employee needs to grow to be successful at the next level.
								</li>
							</ul>
						</div>
					</div>
					<div>
						<h3><em>Qualities of well-written feedback:</em></h3>
					</div>
					<NestedAccordion
						id="clear-nested"
						headerText="Clear and concise"
						>
						<p>
							All Amazonians are busy, so be efficient in your writing. The more concise your writing is, the more respectful you are being to your reader. It’s a better experience for your reader, but it also helps you communicate more effectively. Remember that good writing is easy to read. You should provide sufficient detail to be clear, but cut anything that doesn’t help you convey your key point.
						</p>
						<div>
							<p><b>Hard to read:</b> In order to enhance our investment in maximizing our systems without the encumbrance of onerous costs, it is incumbent upon us to maximize our profitability.</p>
						</div>
						<div>
							<p><b>Clear and concise:</b> In order to invest in new systems, we need to increase our profitability.</p>
						</div>
					</NestedAccordion>
					<NestedAccordion
						id="stands-nested"
						headerText="Stands on its own"
						>
						<p>
							The person reading your feedback or reviewing the final promo doc may or may not know the intricacies of your business or the projects being discussed. The more your feedback can stand on its own, the better.
						</p>
						<ul>
							<li>
								<b>Aim for universal language.</b> Avoid team-specific terms or industry buzz words, unless they are commonly used across Amazon. If you use an acronym, spell it out the first time it appears. Don’t make your reader do extra work to understand your writing.
							</li>
						</ul>
					</NestedAccordion>
					<NestedAccordion
						id="criteria-nested"
						headerText="Criteria-focused"
						>
						<p>
							Promotion feedback should be relevant to the promotion at hand. In other words, you should evaluate the employee’s performance based on the next-level expectations for their role. To help understand the requirements for the level and role, review the Role Guidelines for this position (if available).
						</p>
						<div style={{display: 'flex', flexDirection: 'row', marginTop: '16px'}}>
							<div style={{display: 'flex', flexDirection: 'column', marginRight: '24px'}}>
								<div className={`radio-btn${this.state.criteriaShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('criteria')}>
									RTP
								</div>
								<div className={`radio-btn${!this.state.criteriaShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('criteria')}>
									RNTP
								</div>
							</div>
							<div>
								{this.state.criteriaShowRTP &&
								<Fragment>
									<h5>RTP Section:</h5>
									<div>
										<p>
											<b>Irrelevant:</b> Randall is the strongest developer we have on our training team. He delivers results fast with the highest quality multimedia production. He’s definitely the best L5 we have, so I think he’d make a great L6.
										</p>
									</div>
									<p>
										Although the above statement is speaking to the employee’s performance, it’s not criteria-focused. Strong L5 performance is not evidence of L6 promotion readiness. Remember, we need to evaluate the employee’s performance based on next-level expectations.
									</p>
									<div>
										<p>
											<b>Criteria-focused:</b> An L6 needs to be able to scale strategies and expand past the immediate department. Sayid has made a number of effective process improvements and shared them beyond his direct team. For example, he presented his solution to Project Y at our regional meeting and encouraged some of our partner teams to apply it to similar status tracking issues they were having. His solution has since been adopted by five other teams at Amazon.
										</p>
									</div>
								</Fragment>
								}
								{!this.state.criteriaShowRTP &&
								<Fragment>
									<h5>RNTP Section:</h5>
									<div>
										<p>
											<b>Irrelevant:</b> A reason not to promote John to an L5 Product Manager is Hire and Develop the Best. John hasn’t done a lot of recruiting.
										</p>
									</div>
									<p>
										The above statement is not criteria-focused. There are no specific recruiting expectations for Product Managers at this level. RNTP should speak to the employee’s performance relative to the expectations for that level and role.
									</p>
									<div>
										<p>
											<b>Criteria-focused:</b> As an L5, John needs to have strong expertise in the product he manages. I have observed a couple of times when he was not able to answer important customer questions about how the product functions. 
										</p>
									</div>
								</Fragment>
								}
							</div>
						</div>
					</NestedAccordion>
					<NestedAccordion
						id="aligned-nested"
						headerText="Aligned to the Leadership Principles"
						>
						<p>
							 The Leadership Principles are part of everything we do at Amazon, whether we're discussing ideas for new projects or deciding on the best approach to solving a problem. By writing in the context of the Leadership Principles, you’re using a vocabulary common to all Amazonians.
						</p>
						<div style={{display: 'flex', flexDirection: 'row', marginTop: '16px'}}>
							<div style={{display: 'flex', flexDirection: 'column', marginRight: '24px'}}>
								<div className={`radio-btn${this.state.alignedShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('aligned')}>
									RTP
								</div>
								<div className={`radio-btn${!this.state.alignedShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('aligned')}>
									RTP
								</div>
							</div>
							<div>
								{this.state.alignedShowRTP &&
								<Fragment>
									<h5>RTP Section:</h5>
									<div>
										<p>
											<b>OK:</b> Instead of building something from scratch, Lia came up with an elegant solution to MySQL schema updates built on top of an existing solution.
										</p>
									</div>
									<p>
										We can improve the above statement by connecting the employee’s performance to the Leadership Principle being demonstrated.
									</p>
									<div>
										<p>
											<b>Better:</b> Instead of building something from scratch, Lia demonstrated Invent and Simplify by coming up with an elegant solution to MySQL schema updates built on top of an existing solution.
										</p>
									</div>
									<div>
										<p>
											TIP: If you need a refresher on what a Leadership Principle looks like in practice, consider reviewing the Insider’s Guide to Leadership Principles.
										</p>
									</div>
								</Fragment>
								}
								{!this.state.alignedShowRTP &&
								<Fragment>
									<h5>RNTP Section:</h5>
									<div>
										<p>
											<b>OK:</b> Sarah has a sharp attention to detail; however, she sometimes gets so bogged down in the details that she cannot see the bigger picture.
										</p>
									</div>
									<p>
										We can improve the above statement by connecting the employee’s performance to the Leadership Principle being demonstrated.
									</p>
									<div>
										<p>
											<b>Better:</b> Sarah has room to improve Think Big. She has a sharp attention to detail; however, she sometimes gets so bogged down in the details that she cannot see the bigger picture.
										</p>
									</div>
									<div>
										<p>
											TIP: If you need a refresher on what a Leadership Principle looks like in practice, consider reviewing the Insider’s Guide to Leadership Principles.
										</p>
									</div>
								</Fragment>
								}
							</div>
						</div>
					</NestedAccordion>
					<NestedAccordion
						id="objective-nested"
						headerText="Objective"
						>
						<p>
							Objective feedback is not influenced by personal feelings or opinions. Make sure your feedback is about the employee’s performance, not the employee as a person. Focus on the facts. Provide relevant examples of the employee’s performance to support your perspective.
						</p>
						<div style={{display: 'flex', flexDirection: 'row', marginTop: '16px'}}>
							<div style={{display: 'flex', flexDirection: 'column', marginRight: '24px'}}>
								<div className={`radio-btn${this.state.objectiveShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('objective')}>
									RTP
								</div>
								<div className={`radio-btn${!this.state.objectiveShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('objective')}>
									RNTP
								</div>
							</div>
							<div>
								{this.state.objectiveShowRTP &&
								<Fragment>
									<h5>RTP Section:</h5>
									<div>
										<p>
											<b>Biased:</b> Heidi has a strong Backbone. She never hesitates to raise her voice when she has a concern.
										</p>
									</div>
									<p>
										There's no evidence of the above statement being true beyond the feedback provider’s opinion. How does Heidi demonstrate strong backbone? By adding a specific example, this becomes a defensible statement.
									</p>
									<div>
										<p>
											<b>Objective:</b> Heidi has a strong Backbone. On Project Y, Heidi was pulled in to manage development after our designs had already been finalized. After onboarding and reviewing the specs, Heidi noticed a significant flaw in the design that she felt could damage the customer experience. She raised the flag without hesitation. Despite immediate pushback from the development team (concerned about aggressive timelines), Heidi stressed the importance of altering our design to avoid a potential snag in the UX flow. Her persistence and sound reasoning convinced leadership to address the issue, avoiding the need for us to correct this post-launch. 
										</p>
									</div>
								</Fragment>
								}
								{!this.state.objectiveShowRTP &&
								<Fragment>
									<h5>RNTP Section:</h5>
									<div>
										<p>
											<b>Biased:</b> One area of improvement for Ranjit would be to develop his Backbone. He’s a really sweet person, so I don’t think he wants to hurt anyone’s feelings by voicing his concerns.
										</p>
									</div>
									<p>
										Someone’s personality does not dictate their performance. The above feedback is subjective. By focusing on performance and adding a specific example, this becomes a defensible statement.
									</p>
									<div>
										<p>
											<b>Objective:</b> One area of improvement for Ranjit would be to develop his Backbone. He shouldn't hesitate to raise his voice when he has a concern. On Project X, Ranjit committed to an ETA that was very tight, even after realizing I had underestimated the workload (as I didn't have the SQL expertise). Instead of sharing his concern directly and asking to reconsider the ETA, Ranjit ended up spending a lot of extra hours to meet the tight deadlines. 
										</p>
									</div>
								</Fragment>
								}
							</div>
						</div>
					</NestedAccordion>
					<NestedAccordion
						id="specific-nested"
						headerText="Specific"
						>
						<p>
							Feedback is only useful if it is specific enough to clearly address the employee’s readiness to perform at the next level.
						</p>
						<div style={{display: 'flex', flexDirection: 'row', marginTop: '16px'}}>
							<div style={{display: 'flex', flexDirection: 'column', marginRight: '24px'}}>
								<div className={`radio-btn${this.state.specificShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('specific')}>
									RTP
								</div>
								<div className={`radio-btn${!this.state.specificShowRTP ? ' active' : ''}`} onClick={() => this.handleToggleShowRTP('specific')}>
									RNTP
								</div>
							</div>
							<div>
								{this.state.specificShowRTP &&
								<Fragment>
									<h5>RTP Section:</h5>
									<p>
										In the RTP section, you’re providing your perspective on this person’s promotion readiness. At Amazon, employees grow their careers by increasing their impact on the customer. So, to assess their readiness for promotion, we need to see their impact. Any examples you describe should provide enough detail to convey the employee’s impact at the next level. Ask yourself:
									</p>
									<ol>
										<li>
											<b>What was the situation or problem to be solved?</b>
											When you provide feedback, define the where and when of the situation you’re referring to. Put the feedback into context. 
											<div>
												<p>
													<b>Insufficient detail:</b> Ming did a great job with her report.
												</p>
											</div>
											<p>
												What report? Without context, this feedback is just a generic statement. We need more information to know what this statement is referring to.
											</p>
											<div>
												<p>
													Better but not complete: A month after Project X launched, I asked Ming to review the adoption status. She did a great job with her report. 
												</p>
											</div>
										</li>
										<li>
											<b>What did the employee do in this situation? What behaviors did you observe?</b>
											Describe specific behaviors. Remember to be objective and only describe behaviors that you observed directly. Don’t make assumptions or subjective judgements about those behaviors. What made Ming’s report great? While the above feedback provides context on the situation, it does not give the recipient an idea of what went well. We still need more information to understand this feedback.
											<div>
												<p>
													Almost there: A month after Project X launched, I asked Ming to review the adoption status. She did a great job with her report. She provided a high-level summary view of adoption rates, but also included detailed breakdowns for each sub-population. 
												</p>
											</div>
										</li>
										<li>
											<b>What was the result? What impact did this employee’s behavior have on the business?</b>
											By describing the impact the employee had, you’re highlighting why it matters. Let’s perfect the example we’ve been working on. Instead of feedback, the above statement is a comment about a good job. While relevant, it is not very helpful. We know what made Ming’s report great, but why did her great report matter to the business? By stating the impact Ming’s contribution had, it’s clear why it matters:
											<div>
												<p>
													Better: A month after Project X launched, I asked Ming to review the adoption status. She did a great job with her report. She provided a high-level summary view of adoption rates, but also included detailed breakdowns for each sub-population. Her deep dive revealed some regional patterns we would not have otherwise noticed. The insights we got from Ming’s report have influenced our ongoing adoption strategy for Project X as well as our adoption approach for all future projects.
												</p>
											</div>
											<div>
												<p>
													TIP: The SBI method is a great way to structure your feedback so it includes sufficient detail. Another option is the STAR method, the same basic format we expect in candidate interviews.
												</p>
											</div>
										</li>
									</ol>
								</Fragment>
								}
								{!this.state.specificShowRTP &&
								<Fragment>
									<h5>RNTP Section:</h5>
									<p>
										In the RNTP section, you’re providing your perspective on this person’s growth areas at the next level. Feedback like this is constructive, so it needs to be specific enough for this employee’s manager to take meaningful action on.
									</p>
									<div>
										<p>
									 		<b>Vague:</b> On Project X, Ray Dove Deep on code reviews and streamlined many functions; however, he needs to improve on Think Big.
										</p>
									</div>
									<p>
										This example is too vague. Why does Ray need to improve on Think Big? What did you observe that led you to this conclusion? This example needs more detail to be useful.
									</p>
									<div>
										<p>
									 		<b>Specific:</b> Ray has room to improve on Think Big. He’s great at Diving Deep, but sometimes gets lost in the details. On Project X, Ray dove deep on code reviews and streamlined many of our code functions. However, as an L6, Ray should do more than execute, he should help set the vision as well. There were several points during Project X where Ray had opportunities to do this (the V2 kick-off meeting as one example). I gave him my feedback that the project could have been even more successful and he understood the missed opportunity. With continued coaching, I think Ray can grow in this area and be successful as an L6.
										</p>
									</div>
								</Fragment>
								}
							</div>
						</div>
					</NestedAccordion>
				</Accordion>
				<Accordion
					id="example-accordion"
					headerText="Example"
					>
					<p>
						Let’s see what good looks like!
					</p>
					<h3><em>RTP Section:</em></h3>
					<p>
						Below is a piece of RTP feedback for Uma, an L5 UX Designer being proposed for promotion to L6 Sr. UX Designer.
					</p>
					<p>
						Remember, the objective of this section is to describe how the employee is demonstrating next-level performance. Do you think this example is meeting that objective? Take a moment to read the example and consider what you like about the writing.
					</p>
					<p>
						Note: If you are using a screen reader and the check buttons are not working for you, you can find a summary of that content below this example.
					</p>
					<p>
						Reference: UX Designer Role Guideline 
					</p>
					<div className="gtm-example">
						<p>
							I support Uma's promotion from UX Designer II to UX Designer III.
						</p>
						<p>
    						"UX Designer III’s lead the definition, design, and delivery of larger and more complex initiatives in your team."
						</p>
						<p>
   							“UX Designer III’s effectively communicate design direction, present design solutions, and get alignment with senior-level leadership.” 
						</p>
						<p>
							[Bias for Action, Dive Deep] On Project X, Uma led the entire next-generation UI/UX implementation and regularly consulted with the software development team to ensure that the design ideas were feasible and within reasonable technical scope, so that she was not creating functionality that would be exceedingly complex or have low return on technical investment. She fed the results of these discussions into the design and reviewed the final iteration with CXBRs (Customer Experience Bar Raisers) on at least two occasions in which I was a participant. As a result, the design was polished prior to presentation to leadership for approval and sign-off. Her Bias for Action and willingness to Dive Deep resulted in sound justification for design choices (in terms of technical trade-offs) and very few iterations during the final design review.
						</p>
					</div>
					<h3><em>RNTP Section: </em></h3>
					<p>
						Below is a piece of RNTP feedback for Lee, an L5 Software Development Engineer (SDE II) being proposed for promotion to L6 Sr. Software Development Engineer (SDE III).
					</p>
					<p>
						Remember, the objective of this section is to highlight areas where this employee needs to grow to be successful at the next level. Do you think this example is meeting that objective? Take a moment to read the example and consider what you like about the writing.
					</p>
					<p>
						Reference: SDE Role Guideline
					</p>
					<div>
						<p>
							My main concern with promoting Lee is around scope-of-influence and bias-for-action. While Lee has great technical instincts, and is often consulted by people on our team on how to solve challenging problems and for validation of their plans, I don’t see him doing the identification of and “jumping” on problems and taking ownership of broad areas for the team outside of his focus — which is something Amazon expects from L6 SDE’s. I’d like to see Lee take a more proactive approach and show more bias for action in trying to identify systematic issues affecting the team outside of his assigned work area: “claiming” them, championing them, and driving them to completion. Given his demonstrated strengths, I think he’d be especially well-suited to driving improvements in areas such as tooling quality, automation, and code reviewing standards.
						</p>
						<p>
							Also related to scope-of-influence, I don’t see Lee making the broader-scale contributions outside the scope of his team that are typical of an L6/senior L5 engineer. Except for the CM (Content Management) team, I am not aware of Lee collaborating with people outside the team on an ongoing basis. This sort of collaboration and the relationships it establishes are very important for senior engineers. While I don’t think it’s a blocker for promotion, Lee will need to work on this area if he wants to expand his scope of influence and be successful as an L6 engineer.
						</p>
					</div>
				</Accordion>
				<Accordion
					id="practice-accordion"
					headerText="Practice"
					>
						<Quiz config={quizConfig}/>
				</Accordion>
			</div>
		);
	}
}

export default Sections;