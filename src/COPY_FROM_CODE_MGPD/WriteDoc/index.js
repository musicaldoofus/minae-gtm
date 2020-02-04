import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import TOC from '../../Common/TOC';
import Default from './Default';
import Before from './Before';
import Scope from './Scope';
import Feedback from './Feedback';
import Assessment from './Assessment';
import BRNTP from './BRNTP';
import Quiz from './Quiz';
import cards from '../cards';
import Banner from '../../Common/Banner';

class WriteDoc extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Overview',
				to: ''
			},
			{
				label: 'Before you begin',
				to: '/before',
				sections: [
					'Align on expectations',
					'Take notes',
					'Write and rewrite'
				]
			},
			{
				label: 'Scope of Role',
				to: '/scope',
				sections: [
					'Section basics',
					'Example',
					'Practice'
				]
			},
			{
				label: 'Promotion assessment',
				to: '/assessment',
				sections: [
					'Section basics',
					'Example',
					'Practice'
				]
			},
			{
				label: 'Best Reasons Not to Promote',
				to: '/brntp',
				sections: [
					'Section basics',
					'Example',
					'Practice'
				]
			},
			{
				label: 'Feedback',
				to: '/feedback',
				sections: [
					'Identify providers',
					'Prepare providers',
					'Own the feedback'
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
        //this.props.onClick('visited_learn_promotions_scope_dev');
    }

	render() {
		let { header, label, bannerLabel } = cards[4];
		let bannerProps = { header, label, bannerLabel };
		return (
			<Fragment>
				<Banner {...bannerProps}/>
				<div className="gtm-container">
					<TOC match={this.props.match} contents={this.TOCConfig}/>
					<Route
						exact
						path={this.props.match.url}
						component={Default}
					/>
					<Route
						path={`${this.props.match.url}/before`}
						component={Before}
					/>
					<Route
						path={`${this.props.match.url}/scope`}
						component={Scope}
					/>
					<Route
						path={`${this.props.match.url}/assessment`}
						component={Assessment}
					/>
					<Route
						path={`${this.props.match.url}/brntp`}
						component={BRNTP}
					/>
					<Route
						path={`${this.props.match.url}/feedback`}
						component={Feedback}
					/>
					<Route
						path={`${this.props.match.url}/quiz`}
						component={Quiz}
					/>
				</div>
			</Fragment>
		)
	}
}

export default WriteDoc;