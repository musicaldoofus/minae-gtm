import React from 'react';
import Accordion from '../../../Common/Accordion';
import NestedAccordion from '../../../Common/Accordion/NestedAccordion';
import Video from '../../../Common/Video';
import NextBtn from '../../../Common/NextBtn';

const Feedback = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Feedback</h2>
			</div>
			<div>
				<p>
					Promotion decisions require a high degree of judgment, but as a manager, you won’t make these decisions alone. As a required input to the promotion document, you’ll solicit formal promotion feedback from qualified Amazonians at or above your employee’s proposed promotion level. The goal of the feedback section is to provide a holistic view of your employee’s performance.
				</p>
				<p>
					Although you don’t write this section, there are things you can do to ensure you receive high quality feedback, which you can also use to improve the rest of your promo doc. 
				</p>
			</div>
			<Accordion
				id="identify-accordion"
				headerText="Identify providers"
				>
				<p>
					Identify potential feedback providers early. Remember that the goal of the Feedback section is to provide a holistic view of your employee’s performance. The composition of feedback providers in the promo doc should help you do that. Seek diverse perspectives and take the time to consider your options early.
				</p>
				<ul>
					<li>
						As your employee develops towards promotion, pay attention to who they are working with and identify potential feedback providers as you go.
					</li>
					<li>
						Review and adjust your employee’s development plan and goals to ensure they have opportunities to work with higher-level Amazonians, who can later be asked to give promotion feedback.
						<p>
							Note: Some promotion feedback providers may not be the right fit to address a particular role. Think of it like an external candidate interview: You carefully consider who to include on an interview loop so you can evaluate that candidate as effectively as possible. You should do the same when selecting promotion feedback providers.
						</p>
					</li>
					<li>
						Once you have a potential feedback provider in mind, it’s never too early to connect with them. Reach out for an informal “pulse check” to get a feel for your employee’s promotion readiness. This form of feedback is extremely useful for refining your employee’s development plans. It’s also a great way to ensure alignment on the promotion bar before you solicit formal promotion feedback.
					</li>
				</ul>
			</Accordion>
			<Accordion
				id="prepare-accordion"
				headerText="Prepare providers"
				>
				<p>
					Set feedback providers up for success. Help them help you!
				</p>
				<ul>
					<li>
						Connect with feedback providers early (before a project starts, for example) so they have a heads up that you’ll be asking them for feedback on your employee. This gives them a chance to take notes or make more careful observations while working with your employee. With advanced notice, they’ll have an easier time offering you detailed promotion feedback when the time comes.
					</li>
					<li>
						When you make the formal request, make your intentions clear. Provide plenty of context to help the feedback provider help you. This way you’re more likely to receive targeted feedback that can strengthen your promo doc and inform development planning.
						<ul>
							<li>
								Make sure feedback providers understand the bar for the proposed role and level so they can address the criteria you need them to. Provide a summary of the scope of this employee’s role and/or share the Role Guidelines so they can reference the expectations for the proposed level and role.
							</li>
							<li>
								Let the feedback provider know what you’re looking for. For example, if you’re using the SBI method to structure your examples, ask them to use the SBI method to structure their feedback. If you need more evidence around a specific project or competency to strengthen your promo narrative, ask them if they can address that in their feedback.
							</li>
						</ul>
					</li>
					<li>
						It takes time to write thoughtful feedback. Give your feedback providers ample time to respond to your request. You’ll be more likely to get quality feedback.
					</li>
				</ul>
			</Accordion>
			<Accordion
				id="own-accordion"
				headerText="Own the feedback"
			>
				<p>
					Review the feedback in depth. As a manager, you own the promo doc, and that includes the feedback that goes into it. You should be able to speak to each piece of feedback, if necessary.
				</p>
				<ul>
				    <li>
						Ensure that you understand every piece of feedback you receive. Ask the provider follow-up questions if needed. If you don’t understand a piece of feedback, you can’t act on it appropriately. Ask yourself:
				        <ul>
							<li>
								Is this feedback clear enough for me to take meaningful action on? Can I use it to refine my doc? Can I use it to inform my employee’s coaching?
							</li>
							<li>
								If a leader asked me to speak to this feedback in more detail, could I do so with confidence?
							</li>
						</ul>
					</li>
				    <li>
						Send feedback for rework if the feedback provided is…
						<ul>
							<li>
								Unclear or unspecific — Feedback isn’t useful if it is unclear or does not provide enough detail for you to take meaningful action on.
							</li>
							<li>
								Unbalanced — All promotion feedback must include reasons to promote and reasons not to promote. If the feedback provider hasn’t identified any areas for growth, they may not be the best person to provide promotion feedback for this employee.
							</li>
							<li>
								Not criteria-focused — Feedback should compare the employee’s performance to expectations at the next level, not their current level.
							</li>
							<li>
								Has factual errors — If the provider gets the facts wrong, they should be addressed in a rework.
							</li>
							<li>
								Missing information — For example, if this provider is the only person who can speak to a certain area or competency but they failed to do so, you can send for rework and ask them to include it.
							</li>
							<li>
								Hard to read — Is the feedback one giant run on sentence? Does it have excessive typos that it hard to read? Send it for rework and kindly ask the provider to fix it.
							</li>
						</ul>
						<p>
							TIP: Taking the time to set the feedback provider up for success in your initial request can help avoid many of these common pitfalls.
						</p>
					</li>
					
				    <li>
						Do not send feedback for rework if the feedback provided is…
						<ul>
							<li>
								Not supportive — A “no” vote does not mean no promotion, it’s just one part of a holistic assessment. You shouldn’t try to change the feedback provider’s mind.
							</li>
							<li>
								Clear/actionable but conflicts with your own assessment — Follow up with the provider for clarification if needed, but don’t request rework if you simply disagree with the feedback.
							</li>
						</ul>
					</li>
					<li>
						Use feedback to refine the promo doc:
						<ul>
							<li>
								Promotion feedback is data you can use to strengthen your narrative. If a piece of feedback aligns with your assessment, reference that feedback to add support to your own observations.
							</li>
							<p>
								Bad: I don’t agree with the RNTP Sally provided. She doesn’t know the whole story...
							</p>
							<p>
								OK: John has room to improve his Bias for Action. However, John is aware of this growth area and we have been working together to improve his Bias for Action through coaching...
							</p>
							<p>
								Better: As Sally mentioned in her feedback, John has room to improve his Bias for Action. However, John is aware of this growth area and we have been working together to improve his Bias for Action through coaching...
							</p>
							<li>
								If a piece of feedback deals with something you haven’t covered in the promo doc, make sure you acknowledge it somewhere (especially if it’s a growth area). Show reviewers that you’ve considered all available data in your assessment.
							</li>
							<li>
								If a piece of feedback is not aligned to the rest of your doc or your own observations, consider why there is a lack of alignment. Conflicting feedback is okay as long as it is explained. Get ahead of potential questions doc reviewers may ask when they see feedback that doesn’t align with the rest of your narrative. Don’t be defensive, but do acknowledge the misalignment.
							</li>
							<li>
								Keep an eye out for trends in the feedback you receive. For example, if you’re getting the same reasons not to promote from multiple feedback providers, use the Best Reasons Not to Promote section to provide commentary.
							</li>
						</ul>
					</li>
				</ul>
			</Accordion>
			<NextBtn to={`${match.url.replace('/feedback', '')}/quiz`}>
				Quiz
			</NextBtn>
		</div>
	);
}

export default Feedback;