import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';

const Conversations = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Have career conversations</h2>
			</div>
			<div>
				<p>
					Promotion is one of many possible ways for your employees to grow their careers at Amazon. Understanding your 
					employee’s career aspirations is the first step in supporting their career growth. Your role as a people manager is 
					to have open, two-way career conversations to help employees gain clarity about their career aspirations and the 
					opportunities available to them.
				</p>
				<p>
					Stay aligned with your employee by making career growth an ongoing discussion topic, and check in regularly. This 
					should not be a one-time conversation. Your employee’s aspirations may change as they explore and gain experience. 
					When you and your employee are aligned, you’re better equipped to help them succeed.
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
			<Accordion
				id="accordion-0"
				headerText="Spark self-discovery"
				>
				<div>
					<i className="fas fa-checkmark"></i>
					<p><em>Employees need to drive their own careers, and self-discovery is an important first step. Through questioning and discussion, you can surface super powers, themes, passions, and dislikes.</em></p>
				</div>
				<div>
					<p>
						Conversation examples:
					</p>
					<ul>
						<li>“What past work have you found most satisfying?”</li>
						<li>“What do you enjoy about the work you’re doing now?”</li>
						<li>“How would you like your role to grow in the future?”</li>
					</ul>
				</div>
			</Accordion>
			<Accordion
				id="accordion-1"
				headerText="Explore options"
				>
				<div>
					<i className="fas fa-checkmark"></i>
					<p><em>Help your employee by sharing your insights about the possibilities open to them, and ways they might continue to explore those possibilities.</em></p>
				</div>
				<div>
					<p>
						Conversation examples: 
					</p>
					<ul>
						<li>“What would happen if you…(e.g., took on an international assignment OR worked on a different business or customer problem)”</li>
						<li>“What’s another way you could…(e.g., become a manager)”</li>
						<li>“I’ve had success trying...(e.g., learning a new functional area or skill)”</li>
					</ul>
				</div>
				<div>
					<p><b>Note:</b> Your employee’s career aspirations may take them outside of your team. Be open to supporting them regardless of where their interests lead them.</p>
				</div>
			</Accordion>
			<Accordion
				id="accordion-2"
				headerText="Ask about taking on additional scope "
				>
				<div>
					<i className="fas fa-checkmark"></i>
					<p><em>If your employee’s performance indicates that they can take on increasing scope of work and complexity, ask them if that is something that they are interested in working towards. If so, you should talk openly about their trajectory.</em></p>
				</div>
				<div>
					<p>
						Start the conversation by specifically stating what your employee has accomplished. Recognize their contributions and successes, 
						then show that you want to help them continue to develop. Engage your employee in a discussion about how they might achieve the 
						next level of performance. Help them think about what is next and how they could get there.
					</p>
				</div>
				<div>
					<p>
						Conversation example:
					</p>
					<ul>
						<li><b>Manager:</b> “Manish, you’ve been a rock star at […]. I’ve been very impressed with your work lately. I’d like to help you develop towards the next level and make sure you have the challenges and opportunities to demonstrate your ability to deliver. Is this something that you’re interested in?”</li>
						<li><b>Employee:</b> “Yes. I appreciate you acknowledging the work I’ve been doing, and I am very interested in tackling opportunities that will help me grow and have greater customer impact.”</li>
						<li><b>Manager:</b> “Great! I think there are some great stretch opportunities for you within this team. In our next 1:1, let’s start planning how we will get there.”</li>
					</ul>
				</div>
			</Accordion>
			<Accordion
				id="accordion-3"
				headerText="Create the future"
				>
				<div>
					<i className="fas fa-checkmark"></i>
					<p><em>Work with your employee to identify the steps they can take to grow and attain their career aspirations.</em></p>
				</div>
				<div>
					<p>
						Conversation example:
					</p>
					<ol>
						<li>“What will you do to…”</li>
						<li>"How can I support you in…”</li>
						<li>“Let’s follow up by…”</li>
					</ol>
				</div>
			</Accordion>
			<NextBtn to={`${match.url.replace('/have-career-conversations', '')}/understand-potential`}>Understand potential</NextBtn>
		</div>
	);
}

export default Conversations;