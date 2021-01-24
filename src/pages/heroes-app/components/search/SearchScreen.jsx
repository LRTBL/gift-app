/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import useForm from '../../../../hooks/useForm';
import getHeroesBySuperHero from '../../selectors/getHeroesBySuperHero';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {
    const [{ heroName }, handleChangeValue] = useForm({ heroName: '' });

    const heroes = getHeroesBySuperHero(heroName);
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <input type='text' value={heroName} name='heroName' placeholder='Find your Hero' className='form-control' onChange={handleChangeValue} />
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {heroes.length === 0 && <div className='alert alert-info'> Hero not found</div>}
                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
