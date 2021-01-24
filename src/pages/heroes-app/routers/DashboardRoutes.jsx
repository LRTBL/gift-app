import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
    console.log('');
    return (
        <>
            <NavBar />
            <div className='container mt-5'>
                <Switch>
                    <Route exact path='/heroes-app/marvel' component={MarvelScreen} />
                    <Route exact path='/heroes-app/dc' component={DcScreen} />
                    <Route exact path='/heroes-app/search' component={SearchScreen} />
                    <Route exact path='/heroes-app/hero/:heroId' component={HeroScreen} />
                    <Redirect to='/heroes-app/marvel' />
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;
