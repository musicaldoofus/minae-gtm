import React from 'react';
import Video from '../../../Common/Video';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';
import cards from '../../cards';

const PhilosophyDefault = ({match}) => {
	//window.scrollTo(0, 0);
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Amazon's Promotion Philosophy</h2>
			</div>
			<div>
				<Video
					src="https://broadcast.amazon.com/embed/148982"
					title="Amazon's Promotion Philosophy"
					rating
				/>
				<p>
					Promotion is a key component in Amazon’s approach to recognizing an employee’s growth and achievements, and 
					maintaining our high-performance culture. One of our most valued resources at Amazon is our people, which is 
					why we have the “Hire and Develop the Best” leadership principle: “Leaders raise the performance bar with every 
					hire and promotion.”
				</p>
			</div>
			<hr/>
			<div>
				<Video
					src="https://broadcast.amazon.com/embed/72326"
					title="Leader's Perspectives on Promotions"
					rating
				/>
				<p>
					At Amazon, we promote when the employee’s role is scoped at the next level and the employee has consistently 
					demonstrated next-level performance.
				</p>
				<p>
					At the time of promotion, we expect an employee will have some areas of growth at the next level. We promote those 
					we believe will raise the bar over time, with the capability to grow any necessary skills through coaching and 
					on-the-job learning. If the employee is already exceeding expectations at the next level, we may have waited too 
					long to promote. 
				</p>
			</div>
			<NextBtn className="compact" to={`${match.url}/quiz`} direction="right">
				<div>
					Quiz
				</div>
			</NextBtn>
		</div>
	);
} 

export default PhilosophyDefault;