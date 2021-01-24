import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { GiftApp, TodoApp, HeroesApp } from '../pages';

const AplicationsRouter = () => {
    console.log('');
    return (
        <div>
            <Switch>
                <Route exact path='/gif-app' component={GiftApp} />
                <Route exact path='/todo-list-app' component={TodoApp} />
                <Route path='/heroes-app' component={HeroesApp} />
                <Redirect to='/home' />
            </Switch>
        </div>
    );
};

export default AplicationsRouter;
