import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import cards from '../cards';
import Banner from '../../Common/Banner';
import TOC from '../../Common/TOC';
import Default from './Default';
import Conversations from './Conversations';
import UnderstandPotential from './UnderstandPotential';
import IdentifyProviders from './IdentifyProviders';
import ProposeCycle from './ProposeCycle';
import Quiz from './Quiz';

class Identify extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Overview',
				to: ''
			},
			{
				label: 'Having career conversations',
				to: '/have-career-conversations',
				sections: [
					'Spark self-discovery',
					'Explore options',
					'Ask about taking on additional scope',
					'Create the future'
				]
			},
			{
				label: 'Understand potential',
				to: '/understand-potential'
			},
			{
				label: 'Propose a promotion cycle',
				to: '/propose-cycle'
			},
			{
				label: 'Identify feedback providers',
				to: '/providers',
				sections: [
					'Identify the right feedback providers',
					'Seek diverse perspectives',
					'Connect with feedback providers early',
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
    }

	render() {
		let { header, label, bannerLabel } = cards[2];
		let bannerProps = { header, label, bannerLabel };
		return (
			<Fragment>
				<Banner {...bannerProps}/>
				<div className="gtm-container">
					<TOC contents={this.TOCConfig} match={this.props.match}/>
					<Route
						exact
						path={this.props.match.url}
						component={Default}
					/>
					<Route
						path={`${this.props.match.url}/have-career-conversations`}
						component={Conversations}
					/>
					<Route
						path={`${this.props.match.url}/understand-potential`}
						component={UnderstandPotential}
					/>
					<Route
						path={`${this.props.match.url}/providers`}
						component={IdentifyProviders}
					/>
					<Route
						path={`${this.props.match.url}/propose-cycle`}
						component={ProposeCycle}
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

export default Identify;