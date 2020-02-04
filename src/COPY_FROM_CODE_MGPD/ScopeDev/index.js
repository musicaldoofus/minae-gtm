import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import TOC from '../../Common/TOC';
import Default from './Default';
import Determine from './Determine';
import IdentifyGaps from './IdentifyGaps';
import IdentifyLevel from './IdentifyLevel';
import Support from './Support';
import Quiz from './Quiz';
import cards from '../cards';
import Banner from '../../Common/Banner';

class ScopeDev extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Overview',
				to: ''
			},
			{
				label: 'Determine scope',
				to: '/determine',
				sections: [
					'Reference GLG',
					'Use high judgement to determine what is most important for success at the next level',
					'Write the Scope of Role',
					'Share the scope of role with others and align on expectations'
				]
			},
			{
				label: 'Identify gaps',
				to: '/gaps',
				sections: [
					'Work backwards from the desired state to identify gaps',
					'Use high judgement to prioritize which gaps to address'
				]
			},
			{
				label: 'Identify next-level work',
				to: '/level'
			},
			{
				label: 'Support employee',
				to: '/support'
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
		let { header, label, bannerLabel } = cards[3];
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
						path={`${this.props.match.url}/determine`}
						component={Determine}
					/>
					<Route
						path={`${this.props.match.url}/gaps`}
						component={IdentifyGaps}
					/>
					<Route
						path={`${this.props.match.url}/level`}
						component={IdentifyLevel}
					/>
					<Route
						path={`${this.props.match.url}/support`}
						component={Support}
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

export default ScopeDev;