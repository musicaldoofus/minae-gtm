import React from 'react';
import NextBtn from '../../../Common/NextBtn';

const Support = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Support your employee</h2>
			</div>
			<div>
				<p>
					Consider this guidance for supporting your employee as they work on their stretch opportunities.
				</p>
				<ol>
					<li>
						<b>Don’t evaluate their performance on next-level scope of work.</b>
						<p>Don’t evaluate their performance on the next-level scope of work in the same way you would evaluate their performance on current-level responsibilities. Remember, at the time of promotion, we expect that an employee will have some areas for growth at the next level.</p>
					</li>
					<li>
						<b>Connect your employee to others for additional support.</b>
						<p>Your employee will benefit from support beyond what you provide. Are there mentors you can connect them with? Experienced Amazonians they can reach out to for advice? Are there team members on your employee’s project(s) who you could loop in to assist you in coaching along the way?</p>
					</li>
					<li>
						<b>Keep your employee motivated. </b>
						<p>Challenge sparks motivation and stimulates learning, but there is an upper limit to these effects. How can you stretch your employee while keeping them motivated? What small wins can you celebrate along the way?</p>
					</li>
					<li>
						<b>Be flexible. </b>
						<p>Both you and your employee will learn as you go through this process. Meet regularly to check in on progress, discuss feedback, and adjust plans as needed.</p>
					</li>
				</ol>
			</div>
			<NextBtn to={`${match.url.replace('/support', '')}/quiz`}>
				Quiz
			</NextBtn>
		</div>
	);
}

export default Support;