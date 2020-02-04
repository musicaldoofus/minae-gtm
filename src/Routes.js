import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/containers/Nav';
import linksConfig from './helpers/linksConfig';

const Routes = () => {
    const routes = linksConfig.map(({path, exact, component}) => (
        <Route
            key={path}
            exact={exact}
            path={path}
            component={component}
        />
    ));
    return (
        <>
            <Nav/>
            <Switch>
                    {routes}
            </Switch>
        </>
    );
}

export default Routes;