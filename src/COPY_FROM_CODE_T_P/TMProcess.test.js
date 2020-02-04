import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import TMProcesses from './index.js';

describe('TMP page should behave correctly', () => {
	const langSupport = {userLang: {label: 'English', dataVal: 'en-us'}, updateLang: () => undefined};
	test('It should shallow mount without errors', () => {
		shallow(<TMProcesses token={undefined} onClick={() => undefined} isAuthorized={false} langSupport={langSupport}/>);
	});
	test('Unauthorized users should see <AccessError/>', () => {
		//add logic to check if <AccessError/> is rendering
		const mounted = mount(
			<Router>
				<Route
					path="/"
					render={() => <TMProcesses token={undefined} onClick={() => undefined} isAuthorized={false} langSupport={langSupport}/>}
				/>
			</Router>
		);
	});
});