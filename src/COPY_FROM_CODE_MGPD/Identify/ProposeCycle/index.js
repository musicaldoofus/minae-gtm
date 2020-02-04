import React from 'react';
import NextBtn from '../../../Common/NextBtn';

const ProposeCycle = ({match}) => (
	<div className="container-with-TOC">
		<div>
			<h2>Enter your employee on the Forward-Looking Slate in Amazon Promote.</h2>
		</div>
		<div>
			<p>
				You should start considering an employee for promotion when you recognize their potential to increase the scope and 
				complexity of their work. Starting early gives employees opportunities to develop the skills required to deliver for 
				their customers at the next level. You can update the proposed promotion cycle at any time.
			</p>
		</div>
		<NextBtn to={`${match.url.replace('/propose-cycle', '')}/providers`} direction="right">
			Identify feedback providers
		</NextBtn>
	</div>
);

export default ProposeCycle;