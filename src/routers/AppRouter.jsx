import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../pages';
import AplicationsRouter from './AplicationsRouter';
// import HeroRouter from '../pages/heroes-app/routers/AppRouter';

const AppRouter = () => {
    console.log('');
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/' component={AplicationsRouter} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
