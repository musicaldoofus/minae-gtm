import React from 'react';
import Accordion from '../../../Common/Accordion';
import NestedAccordion from '../../../Common/Accordion/NestedAccordion';
import Quiz from '../../../Common/Quiz';
import quizConfig from './quizConfig';
import NextBtn from '../../../Common/NextBtn';

const BRNTP = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Best reasons not to promote</h2>
			</div>
			<div>
				<p>
					At the time of promotion, we expect that an employee will have some areas for growth at the next level. However, we are confident that the employee has the capability to develop necessary skills through coaching and on-the-job learning. The Best Reasons Not to Promote (BRNTP) section of the promo doc is your chance to show that you thought critically about this promotion decision before proceeding.
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
						    A description of the areas for growth the employee has at the next level.
		        		</li>
		        		<li>
    						A description of how these areas are being addressed. How are you and your employee working together to address gaps and/or how are these gaps already improving?
		        		</li>
		        	</ul>
				</p>
				<p>
					<b>Qualities of a well-written BRNTP:</b>
				</p>
				<NestedAccordion
					id="nested-1"
					headerText="Objective"
				>
					<p>
						 Objective writing is not influenced by personal f Biased: I can’t think of any BRNTP. David has worked SO HARD this year. He deserves this promotion. eelings or opinions. Make sure your BRNTP describes your employee’s performance, not your employee as a person. As the manager of this employee, staying objective can be hard. You’ve invested a lot in this person’s growth and may have a strong relationship with them. Keep your writing objective by focusing on the facts. Provide relevant data and examples of the employee’s performance to support your BRNTP.
					</p>
					<p>
						 Biased: I can’t think of any BRNTP. David has worked SO HARD this year. He deserves this promotion. 
					</p>
					<p>
						It may seem counter-intuitive to call out a BRNTP when you’re trying to promote someone, but omitting a BRNTP is not acceptable. All employees will have areas for growth at the next level.
					</p>
					<p>
						 Objective: David is very strong operationally, but he does not proactively address potential process improvements. While he has a few solid process improvements under his belt, at the L5 level he will be expected to actively work to improve the overall tools and drive operational excellence.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-2"
					headerText="Aligned to the Leadership Principles"
				>
					<p>
						 The Leadership Principles are part of everything we do at Amazon, whether we're discussing ideas for new projects or deciding on the best approach to solving a problem. By writing in the context of the Leadership Principles, you’re using a vocabulary common to all Amazonians. This is another way to help your document stand on its own. 
					</p>
					<p>
						 OK: Sarah has a sharp attention to detail; however, she sometimes gets so bogged down in the details that she cannot see the bigger picture. 
					</p>
					<p>
						We can improve the above statement by connecting the employee’s performance to the Leadership Principle being demonstrated:
					</p>
					<p>
						 Better: Sarah has room to improve Think Big. She has a sharp attention to detail; however, she sometimes gets so bogged down in the details that she cannot see the bigger picture.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-3"
					headerText="Criteria-focused"
				>
					<p>
						 Any BRNTP you provide should be relevant to the promotion at hand. Your task is to call out real issues that may impede your employee’s success at the next level. Reference the Role Guidelines to understand the expectations for the proposed level and role and make sure your BRNTP is relevant. 
					</p>
					<p>
						  Irrelevant: The BRNTP John to an L5 is Hire and Develop the Best. John hasn’t done a lot of interviews. 
					</p>
					<p>
						 Criteria-focused: As an L5, John needs to have strong expertise in the product he manages. I have observed a couple of times when he was not able to answer important customer questions about how the product functions.
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-4"
					headerText="Specific"
				>
					<p>
						 Any BRNTP you provide should be supported by relevant data and examples. 
					</p>
					<p>
						 Vague: John hasn't done a lot of recruiting. 
					</p>
					<p>
						  Specific: John has only recruited one person to Amazon in the last year. An average L6 Product Manager does X amount of recruiting each year. As an L6, recruiting is an area John will need to grow in to be successful. 
					</p>
				</NestedAccordion>
				<NestedAccordion
					id="nested-5"
					headerText="Addresses relevant promo feedback"
				>
					<p>
						 Use this section to describe your own observations and experiences with the employee, but don’t ignore your employee’s promotion feedback. Experienced promo doc writers use feedback to refine their document. If you have promo feedback that aligns with your BRNTP, cite that feedback to help support your observation. If a piece of feedback conflicts with your BRNTP, don’t be defensive and don’t ignore it. Acknowledge it, then speak to their claim from your own experience. 
					</p>
					<p>
						 Bad: I don’t agree with the RNTP Sally provided. She doesn’t know the whole story... 
					</p>
					<p>
						 Okay: John has room to improve his Bias for Action. However, John is aware of this growth area and we have been working together to improve his Bias for Action through coaching... 
					</p>
					<p>
						 Better: As Sally mentioned in her feedback, John has room to improve his Bias for Action. However, John is aware of this growth area and we have been working together to improve his Bias for Action through coaching...
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
						<li> Aim for universal language. Avoid team-specific terms or industry buzz words, unless they are commonly used across Amazon. If you use an acronym, spell it out the first time it appears. Don’t make your reader do extra work to understand your writing.</li>
						<li> Describe why it matters. Don’t assume your reader knows your business as intimately as you do. If your employee automated a process, describe the impact that automation had on the business.	</li>
					</ul>
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
					Let’s see what good looks like! Below is the BRNTP section for Oleg, an L6 Software Development Manager being proposed for promotion to L7 Sr. Software Development Manager. 
				</p>
				<p>
					Remember, the objective of this section is to show that the manager has thought critically about this promotion before deciding to proceed. Do you think this example is meeting that objective? Take a moment to read the example and consider what you like about the writing. 
				</p>
				<p>
					  Reference: SDM Role Guideline
				</p>
				<div className="gtm-example">
					<p>
						The most common theme that emerges in “Reasons Not to Promote” feedback for Oleg is around earning trust. While he’s done a nice job earning the trust of his engineering team, he hasn’t always had success with his business partners, key stakeholders, and sometimes his executive leadership. There are two dimensions of earning trust worth calling out here – adaptive communication and active listening. 
					</p>
					<p>
						Oleg is on a startup team where he owns full stack software and needs to communicate effectively with functional leaders and tech/non-tech executives. He has struggled in figuring out how to adapt his upward communication style (structure, appropriate level of detail, and articulation of critical data that helps facilitate the conversation) with our VP. As Kyle Grey notes, “at times Oleg has struggled with translating technical issues into language that non-technical people can easily understand.” Oleg is very aware of this, and often comes to my office immediately after reviews to talk about how he wasn’t happy with how he managed the meeting, discuss ideas on how he can improve, and get real-time feedback from me. He’s made some improvement here, but this is a skill he’s going to need to continue working on. 
					</p>
					<p>
 						The second dimension that can hinder Oleg’s ability to earn trust is a perceived lack of active listening. As an L7 SDM, Oleg would need to be able to work effectively with other technical leaders. Business team members have commented that Oleg sometimes “maintain[s] his own perspective a bit too strongly,” approaching problems from a constraint-first or technology-first perspective that can make it seem like he’s not listening to their feedback. Oleg’s eagerness to solve problems can sometimes prematurely lock him into an approach that causes friction with others when there are more considerations to weigh. These challenges are exacerbated when coupled with his direct communication style. Oleg has shown self-awareness here, and identified this as something he’s working on at mid-year 2016. Oleg needs to take the time to listen to his partners, and to approach these conversations with a customer-first or problem-first angle. Oleg has made some improvements here. Our Sr. Manager of Marketing recently described him as “open-minded in considering what is important from a cross-team perspective.” So while there are some recent positive signals, he still has room to improve and will need to further invest at the next level. Next month he is scheduled to participate in a training course on active listening. 
					</p>
				</div>
			</Accordion>
			<Accordion
				id="practice-accordion"
				headerText="Practice"
			>
				<Quiz config={quizConfig}/>
			</Accordion>
			<NextBtn to={`${match.url.replace('/brntp', '')}/feedback`}>
				Feedback
			</NextBtn>
		</div>
	);
}

export default BRNTP;