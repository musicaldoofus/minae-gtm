import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Common/Banner';
import StencilizedCard from '../../Common/StencilizedCard';
import cards from '../cards';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.toHomeCard = this.toHomeCard.bind(this);
	}

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    toHomeCard(props/*{to, header, label, description}*/) {
    	return <StencilizedCard {...props} match={this.props.match}/>;
	}

	render() {
		const homeCards = cards.map(this.toHomeCard);
		return (
			<Fragment>
				<Banner label="Welcome"/>
				<div style={{gridTemplateColumns: 'auto auto'}} className="gtm-container">
					<div>
						<div>
							<p>
								Welcome to Learn Promotions. Here you will learn how to make timely, appropriate promotion decisions. 
								Start by completing the Promotion Philosophy module. After that, select the modules that apply to your situation. 
							</p>
							<p>
								Complete all modules and click on the widget placed on the left side of the site to provide feedback and receive the Learn Promotions Beta Test PhoneTool icon.
							</p>
						</div>
						<div className="cards-container">
							{homeCards}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home;