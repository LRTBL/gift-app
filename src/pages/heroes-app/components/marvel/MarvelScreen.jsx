import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
    console.log('');
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroList publisherName='Marvel Comics' />
        </div>
    );
};

export default MarvelScreen;
