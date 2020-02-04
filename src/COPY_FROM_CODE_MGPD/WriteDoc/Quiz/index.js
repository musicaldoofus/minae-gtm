import React from 'react';
import QuizWrapper from '../../LocalCommon/QuizWrapper';
import NextBtn from '../../../Common/NextBtn';
import quizConfig from './quizConfig';
import quizLinks from '../../quizLinks';

const Quiz = (props) => {
	return (
		<div className="write-doc-quiz container-with-TOC">
			<QuizWrapper quizConfig={quizConfig} to={quizLinks.writeDoc}/>
			<div>
				<NextBtn to={`${props.match.url.replace('/write-doc/quiz', '')}/write-feedback`} direction="right">
					<div>
						Next module for managers:
					</div>
					<div>
						Write feedback
					</div>
				</NextBtn>
			</div>
		</div>
	);
}

export default Quiz;