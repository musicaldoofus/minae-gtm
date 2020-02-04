import React from 'react';
import Video from '../../../Common/Video';
import NextBtn from '../../../Common/NextBtn';

const Default = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<Video
					src="https://broadcast.amazon.com/embed/148901"
					title="Scoping and developing employees"
					rating
				/>
			</div>
			<div>
				<p>
					So your employee is on a path to deliver results for their customers at the next level…. Now what?
				</p>
				<p>
					At Amazon, an employee is ready for promotion when they have consistently demonstrated next-level performance in a role that includes next-level scope. Excelling at their current role does not equal promotion readiness. 
				</p>
				<p>
					As a manager, your role is to help your employee understand stretch opportunities with customer impact.
				</p>
				<p>
					Stretch opportunities that offer the ability to have greater customer impact at the next level are critical to a successful development plan and a strong promo doc.
				</p>
				<hr/>
			</div>
			<div>
				<p>
					<b>Actions you will need to take</b>
				</p>
				<p>
					<em>Consider this a working backwards exercise. </em>
				</p>
				<ul>
					<li>Determine the scope of role for the proposed level</li>
					<li>Identify gaps</li>
					<li>Help employees identify natural next-level work</li>
					<li>Support your employee throughout their growth towards the next level</li>
				</ul>
			</div>
			<NextBtn to={`${match.url}/determine`}>
				Determine scope
			</NextBtn>
		</div>
	);
}

export default Default;