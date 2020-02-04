import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';

const ProcessDefault = (props) => {
	//window.scrollTo(0, 0);
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Amazon's Promotion Process</h2>
			</div>
			<div>
				<p>
					Amazon’s promotion process accommodates the diverse needs and skills of our employees. Though exact timing and steps 
					may vary, it is helpful to think of the process as having four main stages.
				</p>
				<p>
					Your role as a manager is to drive and own the promotion process. It’s your responsibility to understand the process and 
					support the employee as they take on increased scope and stretch opportunities. You own writing the promo doc and 
					advocating for your employee when they are ready to deliver results at the next level. When you drive the promotion 
					process, your employees can focus on delivering results for their customers.
				</p>
			</div>
			<Accordion
				id="promotions-process-accordion-1"
				collapseId="promotions-process-accordion-collapse-1"
				headerId="promotions-process-accordion-header-1"
				headerText="Identify potential candidates for promotion"
				>
				<div>
					<p>
						<p><i className="fa fa-calendar"></i><em>Have career development conversations on a regular basis.</em></p>
					</p>
					<p>
						<b>Identify employees whose performance is trending toward the next level.</b>
					</p>
					<p>
						<ul>
							<li>Review employee performance trajectories and identify individuals who are growing and delivering results with increasing scope.</li>
							<li>Have career development conversations with your employees to help them gain clarity about their career aspirations and opportunities.</li>
							<li>Identify natural stretch opportunities that allow an employee to demonstrate next-level scope of work.</li>
							<li>Add your employee to the Forward-Looking Slate in Amazon Promote and start writing the promotion doc (you can do this any time).</li>
						</ul>
					</p>
					<p>
						<p><i className="fa fa-calendar"></i><em>3-6 months prior to the proposed promotion cycle.</em></p>
					</p>
					<p>
						<b>Identify potential feedback providers who can best advocate for your employee.</b>
					</p>
				</div>
			</Accordion>
			<Accordion
				id="promotions-process-accordion-2"
				collapseId="promotions-process-accordion-collapse-2"
				headerId="promotions-process-accordion-header-2"
				headerText="Scope and develop candidates to meet the demands of increased scope"
				>
				<div>
					<p><i className="fas fa-calendar"></i><em>Work backwards from the proposed promotion quarter timeline.</em></p>
				</div>
				<div>
					<p><i className="fas fa-checkmark"></i><em>Help your employee grow their customer impact and meet the requirements at the next level.</em></p>
				</div>
				<div>
					<ul>
						<li>Identify gaps between where the employee’s scope and performance are today, and where they need to be at the next level.</li>
						<li>Help employees identify and take on responsibilities and challenges with increased scope.</li>
						<li>Identify feedback providers and solicit feedback from them.</li>
					</ul>
				</div>
			</Accordion>
			<Accordion
				id="promotions-process-accordion-3"
				collapseId="promotions-process-accordion-collapse-3"
				headerId="promotions-process-accordion-header-3"
				headerText="Write the promo doc"
				>
				<div>
					
					<p><i className="fas fa-calendar"></i><em>Start writing the promotion document at any time. Allow at least 2 weeks for your feedback providers to provide feedback.</em></p>
				</div>
				<div>
					<p><em>For Tech employees being promoted into L6+: Managers must request Tech Promotion Assessments at least 45 days before the quarter due date, 60 days is ideal.</em></p>
				</div>
				<div>
					<p><em>Write the promotion document or feedback to articulate the employee’s promotion readiness.</em></p>
				</div>
				<div>
					<ul>
						<li>Write the promotion document in <a href="https://promote.corp.amazon.com" target="_blank">Promote</a></li>
						<li>Check feedback status in Promote: Have feedback providers submitted their feedback? They will receive automated reminders to respond to the feedback request from Amazon Promote.</li>
						<li>Tech promos only (L6+): Start the Tech Promotion Assessment. For more information, visit the <a href="https://w.amazon.com/bin/view/Tech_Promo/Develop_the_Best/Tech_Promo_Assessment/#HOverview" target="_blank">Tech Promo Assessment Wiki Page.</a></li>
					</ul>
				</div>
			</Accordion>
			<Accordion
				id="promotions-process-accordion-4"
				collapseId="promotions-process-accordion-collapse-4"
				headerId="promotions-process-accordion-header-4"
				headerText="Submit the promotion for review and approval"
				>
				<div>
					<p><i className="fas fa-calendar"></i><em>
						If your org holds calibration meetings (e.g., organization leadership reviews, talent reviews, promo doc 
						reviews, etc.), work backwards from the meeting date to ensure the promotion doc and feedback are submitted 
						on time. Check with your HRBP to find out when/whether your org holds calibration meetings to review promotions.
					</em></p>
				</div>
				<div>
					<p><em>Submit promotion for approval and follow any org-specific promotion guidelines.</em></p>
				</div>
				<div>
					<ul>
						<li>
							Submit promotion for approval in Promote for the employee’s skip-level manager’s approval by the due date for that quarter (see <a href="https://inside.amazon.com/en/toolkits/Manager/EmployeeDevelopment/Promotions/Pages/Promotions-Timelines.aspx" target="_blank">Promotions Timelines</a>).
							<div>
								<b>Note:</b> Amazon requires that employees meet the bar (scope and demonstration), as assessed by the manager and skip-level manager, with supporting documentation and peer feedback, captured in the form of a promo doc. Some groups will choose to add additional audit or calibration mechanisms to help managers understand and uphold the bar.
							</div>
						</li>
						<li>If approved, review and submit compensation recommendations.</li>
						<li>
							If and when compensation is approved, congratulate your employee on the hard work they delivered for their customer, and share the Personal Compensation Summary (PCS) when it’s released.
							<div>
								<b>Note:</b> Please refer to the <a href="https://inside.amazon.com/en/toolkits/Manager/EmployeeDevelopment/Promotions/Pages/Promotions-Timelines.aspx" target="_blank">Promotions Timelines</a> page for information on when to share Personal Compensation Summaries and announce employee promotions each cycle.
							</div>
						</li>
						<li>If deferred, have a discussion with the employee to identify next steps to close any gaps.</li>
					</ul>
				</div>
				<div>
					<p><em>For specific promotion dates and deadlines each quarter, visit the <a href="https://inside.amazon.com/en/toolkits/Manager/EmployeeDevelopment/Promotions/Pages/Promotions-Timelines.aspx" target="_blank">Promotions Timelines Inside page</a>.</em></p>
				</div>
				<div>
					<p><em>For more information on specific Tech promotion timelines, visit the <a href="https://w.amazon.com/bin/view/Tech_Promo/" target="_blank">Tech Promotions at Amazon wiki</a> page.</em></p>
				</div>
			</Accordion>
			<NextBtn to={`${props.match.url}/quiz`} direction="right">
				Quiz
			</NextBtn>
		</div>
	);
}

export default ProcessDefault;