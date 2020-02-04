import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProcessDefault from './Default';
import ProcessQuiz from './Quiz';
import cards from '../cards';
import Banner from '../../Common/Banner';
import TOC from '../../Common/TOC';

class Process extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Promotion Process',
				to: '',
				sections: [
					'Identify potential candidates for promotion',
					'Scope and develop candidates to meet the demands of increased scope',
					'Write the promo doc',
					'Submit the promotion for review and approval'
				]
			},
			{
				label: 'Quiz',
				to: '/quiz'
			}
		];
	}

	componentDidMount() {
        window.scrollTo(0, 0);
        //this.props.onClick('visited_learn_promotions_process');
    }

	render() {
		let { header, label, bannerLabel } = cards[1];
		let bannerProps = { header, label, bannerLabel };
		return (
			<Fragment>
				<Banner {...bannerProps}/>
				<div className="gtm-container">
					<TOC match={this.props.match} contents={this.TOCConfig}/>
					<Route
						exact
						path={this.props.match.url}
						component={ProcessDefault}
					/>
					<Route
						path={`${this.props.match.url}/quiz`}
						component={ProcessQuiz}
					/>
				</div>
			</Fragment>
		)
	}
}

export default Process;