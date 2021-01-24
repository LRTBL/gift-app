import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import AuthContext from '../auth/AuthContext';

const AppRouter = () => {
    const {
        user: { logged },
    } = React.useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/heroes-app/login' exact isAuthenticated={logged} component={LoginScreen} />
                    <PrivateRoute path='/heroes-app' isAuthenticated={logged} component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
