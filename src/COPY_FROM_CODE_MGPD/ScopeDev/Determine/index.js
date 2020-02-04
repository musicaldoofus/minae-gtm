import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';
import Activity from '../../LocalCommon/Activity';
import practiceLinks from '../../practiceLinks';

const Determine = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Determine the scope of role for the proposed level</h2>
				<p>
					This is the desired state for your employee. What is the scope of responsibility, complexity, and level of influence required for the role at the proposed level? *You’ll need this to be well-defined for the promo doc!
				</p>
			</div>
			<Accordion
				id="glg-accordion"
				headerText="Reference the General Leveling Guidelines (GLG)."
			>
				<p>
					Use the GLG to understand the scope of responsibilities, complexity, and impact required for the role at the proposed level. The GLG can help you calibrate your understanding of expectations at the proposed level and set requirements that align with Amazon-wide guidelines.
				</p>
				<p>
					Note: Some roles have role-specific guidelines. If they are available, you can reference them along with the GLG to help you determine scope.
				</p>
			</Accordion>
			<Accordion
				id="high-judgement-accordion"
				headerText="Use high judgement to determine what is most important for success at the next level."
			>
				<p>
					At the time of promotion, we expect that an employee will have some areas for growth at the next level. As you are thinking about the scope of role, consider what competencies are more important and which are okay to coach and develop on the job. This is a high-judgement decision as the role’s scope and complexity is relative to the employee’s customer needs and business-specific needs.
				</p>
			</Accordion>
			<Accordion
				id="write-scope-accordion"
				headerText="Write the Scope of Role."
			>
				<p>
					The Scope of Role is the first section of the promotion document. It is about the job, not the person. It should focus on the next-level work your employee is responsible for, not how well they execute that work. Writing the Scope of Role will help you accomplish two things: Describing their current role responsibilities, complexity, ambiguity, level of influence required, and impact; and defining the scope of their role at the next level. Like a job description, it should be written as it would apply to any person in this role. We recommend that you spend time writing this section of the promotion document early, to ensure you are setting a clear course for your employee, and for your organization.
				</p>
				<p>
					<b>Tip 1. The Scope of Role is essentially a one-page narrative.</b> With this narrative, leap into the future and describe what this specific role at the proposed level would deliver for their customers and their team.
				</p>
				<p>
					<b>Tip 2: When writing this section, consider the role, not the employee.</b>
				</p>
				<p>
					Ask yourself the following questions: 
				</p>
				<p>
					At the proposed level...
				</p>
				<ul>
					<li>What should a successful candidate in this role be able to perform?</li>
					<li>What is the impact of the work?</li>
					<li>Who are their customers?</li>
					<li>What do they deliver? How do they deliver it?</li>
					<li>What is their level of independence?</li>
					<li>What is the complexity of their work?</li>
				</ul>
				<p>
					<b>Note:</b> Leadership Principles (LPs) should not be stated in the Scope of Role. The objective of this section is to show that the employee’s role is scope at the next level.
				</p>
			</Accordion>
			<Accordion				
				id="scope-accordion"
				headerText="Share the scope of role with others and align on expectations."
			>
				<p>
					Don’t do this alone. Take advantage of Amazonians around you for feedback and suggestions on scoping your employee’s role appropriately. Since customer needs and role expectations may change, solicit informal feedback on your employee’s performance as they tackle next-level challenges from your peers, manager, org leaders, and HRBPs to help you understand whether the currently scoped role (employee’s current role) aligns with the proposed level criteria. They may be able to provide insights on how important certain responsibilities and skills are for success at the next level. This helps calibrate your idea of scope of role relative to others’.
				</p>
			</Accordion>		
			<hr/>
			<div>
				<h3>Practice activities</h3>
				<Activity src={practiceLinks.scopeDevOne}/>
				<Activity src={practiceLinks.scopeDevTwo}/>
			</div>
			<NextBtn to={`${match.url.replace('/determine', '')}/gaps`}>
				Identify gaps
			</NextBtn>
		</div>
	);
}

export default Determine;