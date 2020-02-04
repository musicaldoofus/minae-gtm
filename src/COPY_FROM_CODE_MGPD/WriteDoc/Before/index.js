import React from 'react';
import Accordion from '../../../Common/Accordion';
import NextBtn from '../../../Common/NextBtn';

const Before = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Before you begin</h2>
			</div>
			<div>
				<p>
					High standards are teachable. With some exposure, you’ll be able to recognize high-quality promotion writing. But recognition is just the first step.
				</p>
				<p>
					"Often, when a memo isn’t great, it’s not the writer’s inability to recognize the high standard, but instead a wrong expectation on scope: they mistakenly believe a high-standards, six-page memo can be written in one or two days or even a few hours, when really it might take a week or more! The great memos are written and re-written, shared with colleagues who are asked to improve the work, set aside for a couple of days, and then edited again with a fresh mind. They simply can’t be done in a day or two." - Jeff Bezos, 2017 Shareholder Letter
				</p>
				<p>
					Recognizing what good looks like is one thing; execution is another. Here’s what you should expect: For a great promotion document, the effort starts early in the process.
				</p>
			</div>
			<Accordion
				id="align-accordion"
				headerText="Align on expectations"
			>
				<p>
					<b>Early alignment sets you up for success.</b>
				</p>
				<p>
					 You should meet with your manager/org leaders early to ensure alignment on the scope of role for your candidate’s proposed level. This way you can be sure you’re working in the right direction from the very beginning. Reviewing the Role Guidelines with your manager is a great place to start.
				</p>
				<p>
					 Early alignment also gives you a chance to confirm that your approach to the promo doc matches the expectations of your organization. You can use this promo doc rubric to help you and your manager align on doc expectations.
				</p>
			</Accordion>
			<Accordion
				id="notes-accordion"
				headerText="Take notes"
			>
				<p>
					<b>Ongoing documentation makes the writing process easier.</b>
				</p>
				<p>
					Details are harder to remember as time passes. Take notes on your employee’s accomplishments as they happen. When it comes time to write the promo doc, you’ll be thankful you have a detailed record to pull from.
				</p>
				<p>
					There are many methods to keep track of your employee’s accomplishments. Here are just a few suggestions from experienced promo doc writers:
				</p>
				<ul>
					<li>If your employee aspires to reach the next level, work together to create an individual development plan (IDP). If you keep track of their IDP month-to-month, you’ll have a great resource to reference as you write the promo doc.</li>
					<li>Use regular 1:1s with your employee to discuss progress and challenges and gather details you may need for the promo doc. </li>
					<li>Create a spreadsheet to collect data against the Role Guidelines. Use your own observations and work with feedback providers to fill the spreadsheet with related examples over time.</li>
				</ul>
			</Accordion>
			<Accordion
				id="write-accordion"
				headerText="Write and rewrite"
			>
				<p>
					<b>Iteration improves your writing.</b>
				</p>
				<p>
					As with any narrative form, promo doc writing is a skill that takes time and repetition to master. To be a strong writer, you need to write and rewrite. Make sure to leave plenty of time for iteration, particularly if it is your first promo doc.
				</p>
				<p>
					Peer, leader, or HRBP review is an excellent way to refine your writing. Plan on sharing early versions so you have time to iterate and refine your document. Get feedback on your writing early and often. The investment in time will pay off with a strong, crisply written promo doc.
				</p>
				<div id="tip">
					<p>
						<b>TIP:</b> Write a forward-looking promo doc. You can start at any time. This is a great way to practice your writing skills. It also helps you get feedback and align on the bar and scope of role for your employee’s promotion, and informs your employee’s development plan. Talk about efficient!
					</p>
				</div>
			</Accordion>
			<NextBtn to={`${match.url.replace('/before', '')}/scope`}>
				Scope of role
			</NextBtn>
		</div>
	);
}

export default Before;