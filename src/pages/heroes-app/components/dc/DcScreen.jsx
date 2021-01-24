import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
    console.log('');
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />
            <HeroList publisherName='DC Comics' />
        </div>
    );
};

export default DcScreen;
