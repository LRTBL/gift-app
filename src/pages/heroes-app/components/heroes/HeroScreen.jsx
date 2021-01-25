import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, useParams } from 'react-router-dom';
import getHeroById from '../../selectors/getHeroesById';
// import marvel from '../../../../assets/images/marvel-spider.jpg';
import * as heroes from '../../../../assets';

const HeroScreen = ({ history }) => {
    const { heroId } = useParams();

    const hero = React.useMemo(() => getHeroById(heroId), [heroId]);

    if (!hero) {
        return <Redirect to='/heroes-app' />;
    }

    const hadleReturn = () => {
        if (history.length <= 2) {
            history.push('/heroes-app');
        } else {
            history.goBack();
        }
    };
    const { superhero, publisher, alterEgo, firstAppearance, characters } = hero;

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={heroes[heroId]} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3> {superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {alterEgo}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance:</b> {firstAppearance}
                    </li>
                </ul>
                <h5> Characters</h5>
                <p>{characters}</p>
                <button className='btn btn-outline-info' type='submit' onClick={hadleReturn}>
                    Return
                </button>
            </div>
        </div>
    );
};

HeroScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
        length: PropTypes.number.isRequired,
    }).isRequired,
};

export default HeroScreen;
