import React from 'react';
import NextBtn from '../../../Common/NextBtn'

const Default = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Introduction to promotion feedback</h2>
			</div>
			<div>
				<p>
					 When a manager determines that an employee is ready for the next level, they write a promotion document (promo doc) to communicate that employee’s readiness to Amazon leaders. As an input to the promo doc, the manager will also solicit formal promotion feedback from qualified Amazonians. This feedback helps provide a holistic view of the employee’s performance, which helps Amazon leaders make an informed decision.
				</p>
				<p>
					Providing promotion feedback is a way to Develop the Best by contributing to the growth of Amazonians around you. Regardless of the promotion outcome, your feedback will help inform that employee’s ongoing development.
				</p>
			</div>
			<NextBtn to={`${match.url}/expectations`}>
				Feedback expectations
			</NextBtn>
		</div>
	);
}

export default Default;