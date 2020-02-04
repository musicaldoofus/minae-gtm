import React, { Fragment } from 'react';
import Button from '../../Common/Button';

const QuizWrapper = ({to, quizConfig}) => {
	const href = to;
	return (
		<div>
			<div>
				<h2>Quiz</h2>
			</div>
			<div>
				<p>
					Complete the quiz below to check your understanding of this section.
				</p>
			</div>
			<Button
				className="gtm-btn compact"
				style={{marginTop: '24px'}}
				href={href}
				target="_blank"
			>
				Take quiz on KNet
			</Button>
			<hr/>
		</div>
	);
}

export default QuizWrapper;