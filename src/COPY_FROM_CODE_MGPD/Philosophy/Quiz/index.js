import React from 'react';
import QuizWrapper from '../../LocalCommon/QuizWrapper';
import NextBtn from '../../../Common/NextBtn';
import quizConfig from './quizConfig';
import quizLinks from '../../quizLinks';

const PhilosophyQuiz = (props) => {
	return (
		<div className="philosophy-quiz container-with-TOC">
			<QuizWrapper
				quizConfig={quizConfig}
				to={quizLinks.philosophy}
			/>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<NextBtn to={`${props.match.url.replace('/philosophy/quiz', '')}/identify`} direction="right">
					<div>
						Next module for managers:
					</div>
					<div>
						Identifying Candidates
					</div>
				</NextBtn>
				<NextBtn to={`${props.match.url.replace('/philosophy/quiz', '')}/write-feedback`} direction="right">
					<div>
						Next module for feedback providers:
					</div>
					<div>
						Writing the promo feedback
					</div>
				</NextBtn>
			</div>
		</div>
	);
}

export default PhilosophyQuiz;