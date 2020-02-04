import React from 'react';
import Video from '../../../Common/Video';
import NextBtn from '../../../Common/NextBtn';

const Default = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Identifying potential candidates for promotion</h2>
			</div>
			<Video src="https://broadcast.amazon.com/embed/148981"
				title="Identifying potential promotion candidates"
				rating
			/>
			<div>
				<p>
					Do you have employees who are strong performers and beginning to take on work with next-level scope? If so, you 
					should consider helping them develop towards a promotion.
				</p>
				<p>
					In this section, you’ll learn about how to understand your employee’s career aspirations, identify candidates whose
					 performance is trending towards next level, and identify potential feedback providers.
				</p>
			</div>
			<div>
				<p>
					Actions you will need to take:
				</p>
				<ul>
					<li>Have regular two-way career conversations with your employee</li>
					<li>Recognize your employee’s trajectory to grow and take on stretch opportunities at the next level</li>
					<li>Talk to your employee about taking on additional scope</li>
					<li>Propose a promotion cycle for your employee in Amazon Promote.</li>
					<li>Start to identify feedback providers</li>
				</ul>
			</div>
			<NextBtn to={`${match.url}/have-career-conversations`}>Having career conversations</NextBtn>
		</div>
	);
}

export default Default;