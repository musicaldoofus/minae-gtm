import React from 'react';
import QuizWrapper from '../../LocalCommon/QuizWrapper';
import NextBtn from '../../../Common/NextBtn';
import quizConfig from './quizConfig';
import quizLinks from '../../quizLinks';

const Quiz = (props) => {
	return (
		<div className="scope-dev-quiz container-with-TOC">
			<QuizWrapper quizConfig={quizConfig} to={quizLinks.scopeDev}/>
			<div>
				<NextBtn to={`${props.match.url.replace('/scope-and-develop/quiz', '')}/write-doc`} direction="right">
					<div>
						Next module for managers:
					</div>
					<div>
						Writing the promo doc
					</div>
				</NextBtn>
			</div>
		</div>
	);
}

export default Quiz;