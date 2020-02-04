import React from 'react';
import QuizWrapper from '../../LocalCommon/QuizWrapper';
import NextBtn from '../../../Common/NextBtn';
import quizConfig from './quizConfig';
import quizLinks from '../../quizLinks';

const ProcessQuiz = (props) => {
	//window.scrollTo(0, 0);
	return (
		<div className="philosophy-quiz container-with-TOC">
			<QuizWrapper quizConfig={quizConfig} to={quizLinks.process}/>
			<div>
				<NextBtn to={`${props.match.url.replace('/process/quiz', '')}/identify`} direction="right">
					<div>
						Next module for managers:
					</div>
					<div>
						Identifying Candidates
					</div>
				</NextBtn>
			</div>
		</div>
	);
}

export default ProcessQuiz;