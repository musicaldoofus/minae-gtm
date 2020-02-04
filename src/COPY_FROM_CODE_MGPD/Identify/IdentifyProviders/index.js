import React from 'react';
import Accordion from '../../../Common/Accordion';
import Activity from '../../LocalCommon/Activity';
import NextBtn from '../../../Common/NextBtn';
import practiceLinks from '../../practiceLinks';

const IdentifyProviders = ({match}) => (
	<div className="container-with-TOC">
		<div>
			<h2>Identify feedback providers.</h2>
		</div>
		<div>
			<p>
				Promotion decisions require a high degree of judgment, but as a manager, you won’t make these decisions alone. Formal promotion feedback from qualified Amazonians at or above your employee’s proposed promotion level is a required input to the promotion document. The goal of the feedback section is to provide a holistic view of your employee’s performance.
			</p>
			<p>
				At this stage, you will not need to ask for feedback formally, but it’s never too early to connect with feedback providers. As your employee develops towards promotion, pay attention to who they are working with and identify potential feedback providers as you go.
			</p>
			<p>
				Here are a few things to keep in mind to ensure you receive high-quality feedback.
			</p>
		</div>
		<Accordion
			id="accordion-1"
			headerText="Identify the right feedback providers."
		>
			<ul>
				<li>
					Feedback providers must be at or above your employee’s proposed promotion level. 
					<ul>
						<li>Note: Ideal feedback providers are higher-level Amazonians already working with your employee.  </li>
					</ul>
				</li>
				<li>You should have a balance of stakeholders across functions who can provide relevant feedback on the results the employee delivered and their impact on customers, as well as main customers of the results delivered.</li>
				<li>Some promotion feedback providers may not be the right fit to address a particular role. It is similar to an external candidate interview: You carefully consider who to include on an interview loop so you can evaluate that candidate as effectively as possible. You should do the same when selecting promotion feedback providers.</li>
			</ul>
		</Accordion>
		<Accordion
			id="accordion-2"
			headerText="Seek diverse perspectives."
		>
			<p>
				You should have at least three feedback providers. We recommend having five or more, because they can provide a more diverse perspective on the employee’s work – as well as giving you options in case feedback providers move into new roles and are no longer in a good position to give feedback on your employee.
			</p>
		</Accordion>
		<Accordion
			id="accordion-3"
			headerText="Connect with feedback providers early."
		>
			<ul>
				<li>Connect with feedback providers early (before a project starts, for example) so they have a heads up that you’ll be asking them for feedback on your employee. This gives them a chance to take notes or make more careful observations while working with your employee. By giving them advanced notice, it will be easier for them to give detailed promotion feedback when the time comes.</li>
				<li>We recommend you reach out to feedback providers as early as six months, and at least 60 days before the promotion due date. </li>
				<li>
					Reach out for an informal “pulse check” to get a feel for your employee’s promotion readiness. This can be a quick in-person conversation or an email letting them know you’re considering promoting the employee, and you want to gauge their exposure to the employee’s work whether they think your employee is ready for the next level.
					<br/>
					<b>Example:</b> <em>“I have [____] on the promotion Forward-Looking Slate, and am looking to promote them in the next [___] months. I am reaching out to you since you’ve worked closely with [____] to deliver [____]. Based on your experience so far, would you be supportive of this promotion timeframe? What feedback do you have at this point? What growth areas would you recommend they focus on in the next few months?”</em>
				</li>
			</ul>
			<p>
				<b>Note:</b> This form of feedback is extremely useful for refining your employee’s development plans before you ask for formal promotion feedback.
			</p>
		</Accordion>
		<hr/>
		<div>
			<h3>Practice activity</h3>
			<Activity src={practiceLinks.identifyTwo}/>
		</div>
		<NextBtn to={`${match.url.replace('/providers', '')}/quiz`} direction="right">Quiz</NextBtn>		
	</div>
);

export default IdentifyProviders;