import React from 'react';
import Accordion from '../../../Common/Accordion';
import NestedAccordion from '../../../Common/Accordion/NestedAccordion';
import Quiz from '../../../Common/Quiz';
import quizConfig from './quizConfig';
import NextBtn from '../../../Common/NextBtn';

const Assessment = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Promotion assessment</h2>
			</div>
			<div>
				<p>
					At Amazon, we promote when 1) the employee’s role is scoped at the next level, and 2) the employee has demonstrated that they will be successful in that role. The Promotion Assessment section of the promo doc focuses on meeting that second criterion: providing evidence that the employee has demonstrated that they will be successful at the next level.
				</p>
			</div>
			<Accordion
				id="basics-accordion"
				headerText="Section basics"
			>
				<p>
					<b>What goes into this section:</b>
				</p>
				<p>
		        	<ul>
		        		<li>
		        			 Examples of next-level performance. Describe how the employee is already performing at the next level in their current role.
		        		</li>
		        		<li>
		        			 Examples of how this employee demonstrates the Leadership Principles. All employees are expected to demonstrate the Leadership Principles regardless of level. 
		        		</li>
		        	</ul>
				</p>
				<p>
					<b>Qualities of a well-written Promotion Assessment:</b>
				</p>
				<NestedAccordion
					id="nested-1"
					headerText="Balanced"
				>
					<p>
						Your primary objective in the Promotion Assessment section is to show that your employee is already performing at the next level, but this is not a sales pitch. Remember that the primary objective for the promo doc as a whole is to help you and your leaders make an informed decision. Be honest and complete in your assessment. In any examples you provide, be sure to include all relevant details and results, even if some of those details are negative.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-2"
					headerText="Objective"
				>
					<p>
						Objective writing is not influenced by personal feelings or opinions. Make sure your assessment describes your employee’s performance, not your employee as a person. As the manager of this employee, staying objective can be hard. You’ve invested a lot in this person’s growth and may have a strong relationship with them. Keep your writing objective by focusing on the facts. Provide relevant, data-backed examples of the employee’s contributions and behaviors to support your assessment.
					</p>
					<p>
						 Biased: Nira sets the bar for coding on our team. She consistently Insists on the Highest Standards for herself and those around her.
					</p>
					<p>
						There's no evidence of the above statement being true beyond the manager's opinion. By adding a specific example, this becomes a defensible statement:
					</p>
					<p>
						 Objective: Nira sets the bar for coding on our team. She consistently Insists on the Highest Standards for herself and those around her. For example, on Project X, Nira was tasked with conducting code reviews (CRs) for the team. Her CRs were thorough, catching sub-par code written by our other SDEs and offering detailed annotations for improvement. Some of these catches were very subtle and seemingly minor priorities, so there was some push back. Nira took the time to work with each SDE to ensure they understood their code quality issues and the impact those could have down the line. Her insistence on quality resulted in the optimization of our application for Project X, reducing average load times by 15% as well as a 20% reduction in post-launch bugs compared to last year’s release.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-3"
					headerText="Aligned to the Leadership Principles"
				>
					<p>
						 The Leadership Principles are part of everything we do at Amazon, whether we're discussing ideas for new projects or deciding on the best approach to solving a problem. By writing in the context of the Leadership Principles, you’re using a vocabulary common to all Amazonians. All employees are expected to demonstrate the Leadership Principles, regardless of level. As you provide examples of your employee’s next-level work, connect their performance to the Leadership Principles being demonstrated.
					</p>
					<p>
						 OK: Sarah was not satisfied with the original implementation and made it more generic, solving problems for her team and several others in our group.
					</p>
					<p>
						 Better: Sarah showed how she could Think Big on this project. By making her implementation more generic, her solution was scalable, solving problems for her team and several others in our group.
					</p>
					<p>
						TIP: If you need a refresher on what a Leadership Principle looks like in practice, consider reviewing the Insider’s Guide to Leadership Principles.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-4"
					headerText="Criteria-focused"
				>
					<p>
						 In order for you to show that your employee is demonstrating next-level performance, you need to assess their performance against the appropriate criteria. Any examples you provide should be relevant to how they have demonstrated capability at the next level. Reference the Role Guidelines to understand the expectations for the proposed role and level. 
					</p>
					<p>
						 Irrelevant: I support Yani’s promotion to L6. Yani has been a graphic designer at Amazon for over 3 years now. He has a ton of experience. 
					</p>
					<p>
						The above statement is not criteria-focused because it is basing this employee’s promotion readiness on tenure. At Amazon, we promote for performance, not for time in role.
					</p>
					<p>
						 Irrelevant: Randall is the strongest developer we have on our training team. He delivers results fast with the highest quality multimedia production. He’s definitely the best L5 we have, so I think he’d make a great L6. 
					</p>
					<p>
						Although the above statement is speaking to the employee’s performance, it’s not criteria-focused. Strong L5 performance is not evidence of L6 promotion readiness. Remember, we need to evaluate the employee’s performance based on next-level expectations.
					</p>
					<p>
						 Criteria-focused: An L6 needs to be able to scale strategies and expand past the immediate department. Sayid has made a number of effective process improvements that he has shared beyond his direct team. For example, he presented his solution to Project Y at our regional meeting and encouraged some our partner teams to apply it to similar status tracking issues they were having. His solution has since been adopted by five other teams at Amazon.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-5"
					headerText="Specific"
				>
					<p>
						At Amazon, employees grow their career by increasing their impact on the customer. To assess their readiness for promotion, we need to see their impact. Any examples you describe should provide enough detail to convey the employee’s impact at the next level. Be specific about what the employee contributed vs. what the broader team accomplished. Include any relevant data to quantify their impact. Ask yourself:
					</p>
					<ul>
						<li>What was the situation or problem to be solved? What did the employee do to contribute? What was the result?</li>
						<li>Is it clear what impact the employee’s contribution had on the business? Is there relevant data I can include to help quantify their impact?</li>
						<li>Could a leader outside of my org read this and still understand the impact this employee had?</li>
					</ul>
					<p>
						TIP: The SBI method is a great way to structure your feedback so it includes sufficient detail. Another option is the STAR method, the same basic format we expect in candidate interviews.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-6"
					headerText="Stands on its own"
				>
					<p>
						The leaders reviewing your promo doc may or may not be familiar with the intricacies of your business or organization. The more your promo doc can stand on its own, the better. A good rule of thumb: your writing should provide enough context so that a leader outside of your org can still understand the impact the employee had.
					</p>
					<ul>
						<li> Aim for universal language. Avoid team-specific terms or industry buzz words, unless they are commonly used across Amazon. If you use an acronym, spell it out the first time it appears. Don’t make your reader do extra work to understand your writing. </li>
						<li> Describe why it matters. Don’t assume your reader knows your business as intimately as you do. If your employee automated a process, describe the impact that automation had on the business.	</li>
					</ul>
					<p>
						Kendra’s solution automated a formerly manual search process, saving our team $X and freeing X hours of time for investigators across the organization. Her solution made it possible for investigators to focus on higher level work and since implemented, there’s been an X increase in early fraud detection...
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-7"
					headerText="Clear and concise"
				>
					<p>
						All Amazonians are busy, so be efficient in your writing. The more concise your writing is, the more respectful you are being to your reader. It’s a better experience for your reader, but it also helps you communicate more effectively. Remember that good writing is easy to read. You should provide sufficient detail to be clear, but cut anything that doesn’t help you convey your key point. 
					</p>
					<p>
						 Hard to read: In order to enhance our investment in maximizing our systems without the encumbrance of onerous costs, it is incumbent upon us to maximize our profitability. 
					</p>
					<p>
						 Clear and concise: In order to invest in new systems, we need to increase our profitability. 
					</p>
					<p>
						TIP: Need some help making sure your writing is clear and concise? Get some fresh eyes on it. Have someone else review your doc, then iterate based on their feedback.
					</p>
				</NestedAccordion>
			</Accordion>
			<Accordion
				id="example-accordion"
				headerText="Example"
			>
				<p>
					Let’s see what good looks like! Below is a portion of the Promotion Assessment section for Uma, an L5 UX Designer being proposed for promotion to L6 Sr. UX Designer.
				</p>
				<p>
					Remember, the objective of this section is to show that the employee’s performance is at the next level. Do you think this example meets that objective? Take a moment to read the example and consider what you like about the writing.
				</p>
				<p>
					 Reference: UX Designer Role Guideline
				</p>
				<div className="gtm-example">
					<p>
						<b>Design</b>
					</p>
					<p>
						<ul>
						    <li>You lead the definition, design, and delivery of larger and more complex initiatives in your team.</li>
						    <li>You contribute to the evolution of your team’s design practices, recommending improvements in existing standards and patterns or creating new patterns to raise the UX bar.</li>
						    <li>You are genuinely open to feedback; you recognize competing inputs and priorities and take part in constructive dialogue to resolve conflicts.</li>
						    <li>You effectively communicate design direction, present design solutions, and get alignment with senior-level leadership.</li>
						</ul>
					</p>
					<p>
 						Uma leads the definition, design, and delivery of large and complex initiatives. While her design deliverables have been wide ranging, what’s been consistent is the creation of experiences for new, complex, highly visible projects as the sole designer, resulting in her former manager, Steve Clark (UX Manager, L7), referring to her as “a supremely talented UX designer.”
					</p>
					<p>
 						Uma demonstrated Ownership as the sole designer for the online experience of Brand X, Org Y’s first private label brand. She was tasked with creating an online experience to highlight a “beautiful, premium, transparent CX [customer experience].” To deliver this, she created a Detail Page that included 3 new features, along with a new page architecture, while successfully working with the Core Design team to leverage existing patterns. Additionally, she created a visual and photography style guide that informed all marketing materials. Examples of the new designs she delivered included Amazon’s first full-width lifestyle image block; a new product information section; and new rich content modules to focus on the core features of the brand (ingredients and origins). Several peers mentioned that Uma struggled initially to clearly articulate the reasons and justifications for her design decisions (an area of growth Uma is well aware of and actively working on, see BRNTP for details). Ultimately, she was able to gain support for her designs, and senior leadership cited them as being “eye catching, digestible, and unique.” In addition to designing for this single use case, Uma met with appropriate stakeholders regularly to ensure her design could be implemented and subsequently extended to other categories. Because Uma was able to Think Big, Brand X implemented her designs as the foundation for Detail Page’s Z Project.
					</p>
					<p>
 						Her impact on this project was articulated by Tanya Johnas (PM, L7) who said: “Uma was an irreplaceable asset to the Brand X launch. She worked thoughtfully and swiftly, which was a balance I've never seen so optimized in any other designer I've worked with. Ultimately we produced a page that I was very proud to bring to customers and did so with a very short timeline.” Additionally, her manager at the time (Steve Clark, L7) gave the following feedback about her work on this project: “You stepped into a role that was rife with challenges, from creating an end-to-end shopping UX to it being a new and strategic brand launch with many senior stakeholders. Throughout the process you dealt with and adapted to the many shifts in direction and limitations, and partnered closely with Team X Designers to incorporate their feedback, and ultimately launched an experience that enabled the products to display the premium level that was desired. A difficult feat on our current platform. Truly impressive.”
					</p>
				</div>
			</Accordion>
			<Accordion
				id="practice-accordion"
				headerText="Practice"
			>
				<Quiz config={quizConfig}/>
			</Accordion>
			<NextBtn to={`${match.url.replace('/assessment', '')}/brntp`}>
				Best reasons not to promote
			</NextBtn>
		</div>
	);
}

export default Assessment;