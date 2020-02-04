import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';

const IdentifyGaps = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Identify gaps</h2>
				<p>
					Working backwards from the desired state, identify the gaps between your employee’s performance today and where they want to be.
				</p>
			</div>
			<Accordion
				id="work-backwards-accordion"
				headerText="Work backwards from the desired state to identify gaps."
			>
				<p>
					Look at examples of work the employee has delivered and compare it to the scope of role at the proposed level. Identify the gaps between your employee’s performance today and the proposed future state, as well as how you can close these gaps. At the time of promotion, we expect that an employee will have some areas for growth at the next level. However, we are confident that the employee has the capability to develop necessary skills through coaching and on-the-job learning.
				</p>
			</Accordion>
			<Accordion
				id="high-judgement-accordion"
				headerText="Use high judgement to prioritize which gaps to address."
			>
				<p>
					Ask yourself the following questions:
				</p>
				<ul>
					<li>What are the competencies, responsibilities, and leadership behaviors the employee has had little or no chance to demonstrate? </li>
					<li>What is the customer impact of these gaps?</li>
					<li>Does the employee need to learn additional technical skills to succeed? </li>
					<li>What type of feedback or growth ideas are you hearing from peer and stakeholder feedback? </li>
					<li>How would peers respond to this promotion today?</li>
				</ul>
			</Accordion>
			<NextBtn to={`${match.url.replace('/gaps', '')}/level`}>
				Identify next-level work
			</NextBtn>
		</div>
	);
}

export default IdentifyGaps;