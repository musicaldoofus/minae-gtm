import React from 'react';
import Activity from '../../LocalCommon/Activity';
import NextBtn from '../../../Common/NextBtn';
import practiceLinks from '../../practiceLinks';

const IdentifyLevel = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Help employees identify natural next-level scope of work</h2>
			</div>
			<div>
				<p>
					For your employee to demonstrate next-level performance, they need opportunities to do next-level work and exhibit next-level leadership.
				</p>
				<p>
					Managers may need to support employees in identifying natural stretch opportunities and removing barriers (e.g., bandwidth, reprioritizing deliverables). Taking on additional responsibilities and challenges gradually stretches their current skills to reach the scope of role required at the next level. This gives your employee the opportunities they will need to close their gaps and demonstrate that they will be successful when promoted.
				</p>
				<p>
					Employees may need your help discovering existing opportunities within their current work; you may also need to look outside their current work for the right opportunities. 
				</p>
				<p>
					It is your role as a manager to support your employee’s path to promotion and provide opportunities to demonstrate next-level expectations. 
				</p>
				<ul>
					<li><b>Consider opportunities to demonstrate next-level work.</b> Are there opportunities within your employee’s current or upcoming project where your employee can demonstrate next-level work? The opportunity doesn’t have to be a “special project,” but could be an opportunity for the employee to demonstrate leadership qualities. Explore options to expand the scope of your employee’s role within your larger organization.</li>
					<li><b>Consider the employee’s capacity.</b> This is not about capacity overloading, but more about the scope of work you give them. How will you balance your employee’s current workload with their increase in responsibilities and scope?</li>
					<li><b>Consider room for failure.</b> Developing new skills takes time and practice. For your employee to grow, they need room to fail. How can you provide opportunities for them to fail safely?</li>
					<li><b>Consider consistency.</b> Remember that employees need to demonstrate consistent performance at the next level. This means they will need multiple opportunities to demonstrate their capabilities.</li>
					<li><b>Have ongoing development conversations.</b> Encourage your employee to own their development. You should work together to outline requirements, identify gaps, and plan their development.</li>
				</ul>
			</div>
			<hr/>
			<div>
				<h3>Practice activity</h3>
				<Activity src={practiceLinks.scopeDevThree}/>
			</div>
			<NextBtn to={`${match.url.replace('/level', '')}/support`}>
				Support employee
			</NextBtn>
		</div>
	);
}

export default IdentifyLevel;