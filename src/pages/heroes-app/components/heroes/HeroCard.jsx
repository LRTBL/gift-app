import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as heroes from '../../../../assets';

const HeroCard = ({ id, superhero, alterEgo, firstAppearance, characters }) => {
    console.log('');
    return (
        <div className='card ms-3 mt-3 animate__animated animate__zoomIn' style={{ maxWidth: 540 }}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={heroes[id]} className='card-img' alt={superhero} />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> {superhero}</h5>
                        <p className='card-text'>{alterEgo}</p>
                        {alterEgo !== characters && <p className='card-text'>{characters}</p>}
                        <p className='card-text'>
                            <small className='text-muted'>{firstAppearance}</small>
                        </p>
                        <Link to={`/heroes-app/hero/${id}`}> Más ...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alterEgo: PropTypes.string.isRequired,
    firstAppearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
};

export default HeroCard;
