import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';

const Expectations = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Feedback expectations</h2>
			</div>
			<div>
				<p>
					If a manager asks you to provide promotion feedback, they believe that you have enough familiarity with the candidate’s performance to assess their readiness for promotion to the next level.
				</p>
			</div>
			<Accordion
				id="what-to-expect-accordion"
				headerText="What to expect"
			>
				<p>There are three steps when responding to a promotion feedback request:</p>
				<h4>1) Accept or Reject:</h4>
				<p><em>“Can I provide balanced promotion feedback for this candidate?”</em></p>
				<p>
					Ask yourself if you’ve had enough interaction with this employee to provide a balanced perspective on their performance. Do you know their work and leadership behaviors well enough to speak to both strengths and weaknesses? If the answer is “Yes,” you should accept the feedback request.
				</p>
				<h4>2) Cast Your Vote:</h4>
				<p><em>“Do I support this promotion?”</em></p>
				<p>
					A promotion recommendation should begin with a clear vote. You either support the promotion, oppose it, or don’t have enough information to cast a vote (in which case you should not accept the feedback request to begin with).
				</p>
				<p>
					If you support the promotion, you’re stating that the candidate meets the bar for the next level. If you do not support the promotion, you’re stating that the candidate does not meet the bar for the next level. Either way, your feedback is a valuable contribution to the promo doc and will help leaders make an informed decision about this promotion.
				</p>
				<p>
					Note: Don’t feel bad if you don’t support the promotion. A “No” vote does not mean this employee will not be promoted—it is simply one part of a holistic assessment. Regardless of the promotion outcome, your feedback will help this employee grow.
				</p>
				<h4>3) Explain Your Vote:</h4>
				<p><em>“Why do I support/not support this promotion?”</em></p>
				<p>
					At Amazon, we promote for performance, not potential. In other words, to be considered for promotion, the employee must first show evidence of operating at the next level. No matter which way you vote, you need to back up your decision with relevant evidence. Your feedback should provide specific examples of where the candidate is meeting the bar for the next level, and where they still have room to grow.
				</p>
				<div>
					<p>
						Remember: At the time of promotion, we expect that employees will have some areas for growth at the next level, but we are confident that they will be able to address any gaps with coaching and on-the-job learning. Even if you support the employee’s promotion, your feedback should offer a balanced assessment of their performance.
					</p>
				</div>
			</Accordion>
			<Accordion
				id="be-professional-accordion"
				headerText="Be professional"
			>
				<ul>
					<li>
						<b>Accept or reject requests promptly.</b> When you receive a promotion feedback request, it’s important for you to quickly determine whether or not you can provide your feedback by the requested due date.
					</li>
					<li>
						<b>If you decline, include your reason why.</b> There are several possible reasons one might decline a promotion feedback request. Providing your reason will help the manager understand and adjust their future requests as appropriate. For example, the manager might not have given you enough turnaround time and you simply don’t have the bandwidth to comply. It’s important to let the manager know this, even if they won’t be getting your promotion feedback this time.
					</li>
					<li>
						<b>If you accept, respond by the requested due date.</b> Your feedback is just one input to a larger narrative that the requesting manager is responsible for. It’s important to submit your feedback by the due date requested so the manager has enough time to review and incorporate it into the broader promotion document.
					</li>
					<li>
						<b>Keep it confidential.</b> Don’t discuss the fact that you’re providing feedback for this employee with other Amazonians. Keep it confidential. Only discuss the promotion with the employee’s manager.
					</li>
				</ul>
			</Accordion>
			<Accordion
				id="own-accordion"
				headerText="Own your contribution"
			>
				<p>
					Providing promotion feedback is an important responsibility, and a key part of Developing the Best. Take the time to give an honest, thoughtful response.
				</p>
				<ul>
					<li>
						<b>Ask follow-up questions if you need to.</b>  Managers will usually include some context and direction for you in their feedback request, depending on how well you know the candidate and their role or business. If you have any questions or need more information to provide useful feedback, don’t hesitate to ask the manager.
					</li>
					<li>
						<b>Proofread for typos and overall clarity before submitting.</b> Managers put a lot of time and effort into promotion documents. They cannot edit your feedback, so make sure your writing is of good quality. Before you submit, proofread for spelling, grammar, and overall clarity.
					</li>
				</ul>
			</Accordion>
			<NextBtn to={`${match.url.replace('/expectations', '')}/sections`}>
				Feedback sections
			</NextBtn>
		</div>
	);
}

export default Expectations;