import React from 'react';
import Accordion from '../../../Common/Accordion';
import Quiz from '../../../Common/Quiz';
import quizConfig from './quizConfig';
import NextBtn from '../../../Common/NextBtn';

const Scope = ({match}) => {
	return (
		<div className="container-with-TOC">
			<div>
				<h2>Scope of role</h2>
			</div>
			<div>
				<p>
					At Amazon, we promote when 1) the employee’s role is scoped at the next level, and 2) the employee has demonstrated that they will be successful in that role. The Scope of Role section of the promo doc is your chance to provide evidence of that first criterion: the employee’s role is scoped at the next level.
				</p>
				<p>
					Note: There’s a difference between Scope of Role (a written description) and the act of scoping a role (gradually increasing the scope of an employee‘s role for development). This training focuses on writing the Scope of Role section for a promotion document. For guidance on scoping your employee’s role for development to the next level, see the Scoping the Role reference guide.
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
					<b>A description of your employee’s current role</b> responsibilities, complexity, level of influence required, and impact as it would apply to any person in this role. If your employee is on the path to promotion, their <em>current role</em> should be scoped at the next level. This section is your chance to demonstrate that the current role is meeting that criterion.
		        	<ul>
		        		<li>If this is a people manager role, this includes a description of leadership responsibilities, e.g., managing through other managers; building a team; expanding team to different geographies; the size, make up, and geographic distribution of team; etc.</li>
		        	</ul>
				</p>
				<p>
					<b>How to write this section well:</b>
				</p>
				<ul>
					<li>
						Scope of Role is about the job, not the person. In other words, this section is about the work your employee is responsible for, not their execution of that work. Think of it more as a job description. It is independent of the person performing the role.
					</li>
					<li>
						Scope of Role is specific, not generic. This section is not a repeat of the Role Guidelines. For example, don’t simply describe the scope of an L5 Program Manager. That’s too generic and won’t meet the purpose of this section. Instead, describe the scope of an L5 Program Manager in THIS role. Your reader needs to know that the responsibilities of this specific role match an L5 scope. 
					</li>
				</ul>
				<table>
					<tr>
						<th colspan="3">ROLE GUIDELINES vs. SCOPE OF ROLE</th>
					</tr>
					<tr>
						<td><b>Role Guidelines</b></td>
						<td>L5 Program Manager</td>
						<td>Generic (this is what a typical L5 PM does)</td>
					</tr>
					<tr>
						<td><b>Scope of Role</b></td>
						<td>The expressed combination of role and level in a given environment</td>
						<td>Specific (this is what an L5 PM does on my team)</td>
					</tr>
				</table>
			</Accordion>
			<Accordion
				id="example-accordion"
				headerText="Example"
			>
				<p>
					Let’s see what good looks like! Below is the Scope of Role section for Kudzayi, an L5 Technical Program Manager being considered for promotion to L6 Sr. Technical Program Manager. 
				</p>
				<p>
					Remember, the objective of this section is to show that the employee’s role is scoped at the next level. Do you think this example meets that objective? Take a moment to read the example and consider what you like about the writing.
				</p>
				<p>
					 Reference: TPM Role Guideline
				</p>
				<div className="gtm-example">
					<p>
						As the Sr. Technical Program Manager (TPM) in the Consumer X-organization, this role leads the Y-group TPM team. Y-group is responsible for providing cross-company platforms for identity and access management, and for securing data. Y-group operates 12 Tier-1 and 27 Tier-2 systems that are used by all of Amazon, including AWS. The Y-group organization consists of 105 SDEs and 8 TPMs. The team protects 90,000 AWS accounts used by the Consumer X-organization. We protect data in transit and manage critical public key infrastructure (PKI). We protect data at rest through tokenization and encryption technology and manage user credentials and permissions.
					</p>
					<p>
						A Sr. TPM drives efficiencies in engineering and/or complex architectures to unblock innovation and/or speed of delivery within program area. The Sr. TPM for Y-group’s first responsibility is to be the company domain expert and driver of cross-company projects related to PKI Certificates at Amazon. Certificates are critical for internal and external security and are used by nearly every technical team in the company. Expirations in certificates have caused outages to critical services and led to multiple Sev-1s. Discovery of security vulnerabilities in certificates requires coordinated responses across the company including AWS and Devices.
					</p>
					<p>
 						A Sr. TPM manages the lifecycle of a complex cross-functional program with considerable impact or challenging business goals. Certificates are one of the most technically complex areas of security — certificate vulnerabilities can be subtle, as can the chains of trust that allow certificates to be vended and revoked. Technical leadership in this role is critical as the Sr. TPM drives fixes to security vulnerabilities across the company, or drives improvements to our Certificate vending technology to ensure that updated certificates reach every load balancer, host, and device. 
					</p>
					<p>
 						A Sr. TPM works across organizations. May influence external customers, partners, system owners, and/or architectures. In addition to working with certificates, the Sr. TPM leads a team of 8 TPMs (4 in the US and 4 in India – dotted line) to drive strategy, operational planning (OP1 and OP2), and execution for all of Y-group. This role independently engages with partners in Information Security, AWS Security, Digital Security, customers across Consumer X-organization, and leaders in Y-group to identify key investment areas for the next year, prioritize based on business impact, and negotiate funding with leadership. The Sr. TPM runs the monthly program review with each team in Y-group, and consolidates monthly and quarterly status for all of Y-group to review with leadership. 
					</p>
				</div>
			</Accordion>
			<Accordion
				id="practice-accordion"
				headerText="Practice"
			>
				<Quiz config={quizConfig}/>	
			</Accordion>
			<NextBtn to={`${match.url.replace('/scope', '')}/assessment`}>
				Promotion assessment
			</NextBtn>
		</div>
	);
}

export default Scope;