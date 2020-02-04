import React from 'react';
import Activity from '../../LocalCommon/Activity';
import NextBtn from '../../../Common/NextBtn';
import practiceLinks from '../../practiceLinks';

const UnderstandPotential = ({match}) => (
	<div className="container-with-TOC">
		<div>
			<h2>Understand your employee’s potential to deliver results for customers at the next level</h2>
		</div>
		<div>
			<p>
				It is your role as a manager to regularly review your employee’s work and feedback from peers and stakeholders to 
				understand their performance. If you see that your employee’s performance and growth indicates that they can increase 
				the scope and complexity of their work, you should consider promoting them.
			</p>
			<p>
				Your employees are ready to take on additional scope when they are:
			</p>
			<ul>
				<li>Outpacing their peers at the current level</li>
				<li>Delivering next level</li>
				<li>Demonstrates next level leadership behaviors</li>
			</ul>
		</div>
		<div>
			<p>
				Use your observations, notes, and stakeholder feedback to determine whether they are ready to take on additional scope.
				Ask yourself the following questions: 
			</p>
			<ul>
				<li>Have they consistently exceeded Amazon’s high performance bar at their current level?</li>
				<li>Are they at a point where their growth depends on working on stretch opportunities?</li>
				<li>Have they increased the scope and complexity of their work?</li>
				<li>Have they demonstrated the capacity to expand their leadership contributions?</li>
				<li>Do they exemplify the Leadership Principles?</li>
			</ul>
		</div>
		<hr/>
		<div>
			<h3>Practice activity</h3>
			<Activity src={practiceLinks.identifyOne}/>
		</div>
		<NextBtn
			to={`${match.url.replace('/understand-potential', '')}/propose-cycle`}
			direction="right"
			>
			Propose promotion cycle
		</NextBtn>
	</div>
);

export default UnderstandPotential;