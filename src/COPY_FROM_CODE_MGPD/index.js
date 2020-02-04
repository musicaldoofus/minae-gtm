import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import getEnv from '../Utils';
import postToDB from '../Utils/postToDB';
import INLINE_LINKS from '../Utils/INLINE_LINKS';
import SiteWrapper from '../Common/SiteWrapper';
import Home from './Home';
import Philosophy from './Philosophy';
import Process from './Process';
import Identify from './Identify';
import ScopeDev from './ScopeDev';
import WriteDoc from './WriteDoc';
import WriteFeedback from './WriteFeedback';
import FinalSteps from './FinalSteps';
import './LearnPromotions.css';

class LearnPromotions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			returnToTop: null
		};
        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(objId) {
		const apiUrl = '/no-api';
        postToDB({objectId: objId}, apiUrl);
	}

	componentDidMount() {
		const that = this;
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('#return-to-top').fadeIn(200);
                if (!that.state.showReturnToTopBtn) that.setState({showReturnToTopBtn: true});
            } else {
                $('#return-to-top').fadeOut(200);
                if (that.state.showReturnToTopBtn) {
                    window.setTimeout(that.setState({showReturnToTopBtn: false}), 200);
                }
            }
        });
	}
 
	render() {
        const { config, isAuthorized, langSupport, isTranslated, isAdmin } = this.props;
        const navProps = { config, isAuthorized, langSupport, isTranslated, isAdmin };
		return (
			<SiteWrapper
				betaTesting
                site="learn-promotions"
                langSupport={this.props.langSupport}
                isTranslated={navProps.isTranslated}
                navProps={navProps}
			>
				<Route
					exact
                    path={this.props.match.url}
                    render={(props) => <Home {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/philosophy`}
					render={(props) => <Philosophy {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/process`}
					render={(props) => <Process {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/identify`}
					render={(props) => <Identify {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/scope-and-develop`}
					render={(props) => <ScopeDev {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/write-doc`}
					render={(props) => <WriteDoc {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/write-feedback`}
					render={(props) => <WriteFeedback {...props} onClick={this.handleClick}/>}
				/>
				<Route
					path={`${this.props.match.url}/final-steps`}
					render={(props) => <FinalSteps {...props} onClick={this.handleClick}/>}
				/>
			</SiteWrapper>
		);
	}
}

export default LearnPromotions;