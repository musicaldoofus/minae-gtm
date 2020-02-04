import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import postToDB from '../Utils/postToDB';
import SiteWrapper from '../Common/SiteWrapper';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import FeedbackWidget from '../Common/FeedbackWidget';
import Home from './Home';
import AccessError from '../Common/AccessError';
import Loading from '../Common/Loading';

class TMProcesses extends Component {
	constructor(props) {
		super(props);
        this.handleClick = this.handleClick.bind(this);
	}

    handleClick(objId) { //using wrapper function to allow extension including badging for v2
        postToDB({objectId: objId});
    }

    render() {
        const { config, isAuthorized, langSupport, isTranslated, isAdmin } = this.props;
        const navProps = { config, isAuthorized, langSupport, isTranslated, isAdmin };
        return (
            <SiteWrapper site="q1-talent-processes" navProps={navProps} langSupport={this.props.langSupport}>
                <Home
                    onClick={this.handleClick}
                    userLang={this.props.langSupport.userLang.dataVal}
                />
            </SiteWrapper>
        );
    }
}

export default TMProcesses;