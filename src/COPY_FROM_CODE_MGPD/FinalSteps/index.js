import React, { Component, Fragment } from 'react';

class FinalSteps extends Component {
	componentDidMount() {
        window.scrollTo(0, 0);
        //this.props.onClick('visited_learn_promotions_final_steps');
    }

	render() {
		return (
			<Fragment>
				<div className="gtm-banner">
					<p className="gtm-paragraph-small"></p>
					<h1></h1>
				</div>
				<div className="gtm-table-of-contents">

				</div>

			</Fragment>
		)
	}
}

export default FinalSteps;