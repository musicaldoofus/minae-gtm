import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PhilosophyDefault from './Default';
import PhilosophyQuiz from './Quiz';
import Banner from '../../Common/Banner';
import TOC from '../../Common/TOC';
import cards from '../cards';

class Philosophy extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Promotion Philosophy',
				to: ''
			},
			{
				label: 'Quiz',
				to: '/quiz'
			}
		];
	}

	componentDidMount() {
        window.scrollTo(0, 0);
    }

	render() {
		let { header, label, bannerLabel } = cards[0];
		let bannerProps = { header, label, bannerLabel };
		return (
			<Fragment>
				<Banner {...bannerProps}/>
				<div className="gtm-container">
					<TOC contents={this.TOCConfig} match={this.props.match}/>
					<Route
						exact
						path={this.props.match.url}
						component={PhilosophyDefault}
					/>
					<Route
						path={`${this.props.match.url}/quiz`}
						component={PhilosophyQuiz}
					/>
				</div>
			</Fragment>
		)
	}
}

export default Philosophy;