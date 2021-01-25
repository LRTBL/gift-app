import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { GiftApp, TodoApp, HeroesApp, Home } from '../pages';

const AppRouter = () => {
    console.log('');
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/gif-app' component={GiftApp} />
                    <Route exact path='/todo-list-app' component={TodoApp} />
                    <Route path='/heroes-app' component={HeroesApp} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
