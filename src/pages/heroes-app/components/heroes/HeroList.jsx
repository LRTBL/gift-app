/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisherName }) => {
    const heroes = React.useMemo(() => getHeroesByPublisher(publisherName), [publisherName]);
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};

HeroList.propTypes = {
    publisherName: PropTypes.string.isRequired,
};

export default HeroList;
