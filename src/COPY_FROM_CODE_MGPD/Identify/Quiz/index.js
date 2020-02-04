import React from 'react';
import QuizWrapper from '../../LocalCommon/QuizWrapper';
import NextBtn from '../../../Common/NextBtn';
import quizLinks from '../../quizLinks';

const Quiz = (props) => {
	return (
		<div className="philosophy-quiz container-with-TOC">
			<QuizWrapper quizConfig={{}} to={quizLinks.identify}/>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<NextBtn to={`${props.match.url.replace('/identify/quiz', '')}/scope-and-develop`} direction="right">
					<div>
						Next module for feedback providers:
					</div>
					<div>
						Scope & Develop
					</div>
				</NextBtn>
			</div>
		</div>
	);
}

export default Quiz;