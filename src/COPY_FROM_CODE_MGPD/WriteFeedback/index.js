import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import TOC from '../../Common/TOC';
import Default from './Default';
import Expectations from './Expectations';
import Sections from './Sections';
import cards from '../cards';
import Banner from '../../Common/Banner';

class WriteFeedback extends Component {
	constructor() {
		super();
		this.TOCConfig = [
			{
				label: 'Overview',
				to: ''
			},
			{
				label: 'Feedback expectations',
				to: '/expectations',
				sections: [
					'What to expect',
					'Be professional',
					'Own your contribution'
				]
			},
			{
				label: 'Feedback sections',
				to: '/sections',
				sections: [
					'Section basics',
					'Example',
					'Practice'
				]
			}
		];
	}
	componentDidMount() {
        window.scrollTo(0, 0);
        //this.props.onClick('visited_learn_promotions_scope_dev');
    }

	render() {
		let { header, label, bannerLabel } = cards[5];
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
						path={`${this.props.match.url}/expectations`}
						component={Expectations}
					/>
					<Route
						path={`${this.props.match.url}/sections`}
						component={Sections}
					/>
				</div>
			</Fragment>
		)
	}
}

export default WriteFeedback;