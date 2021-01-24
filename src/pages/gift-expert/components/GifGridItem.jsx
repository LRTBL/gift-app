import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ url, title }) => {
    console.log('Prueba');
    return (
        <div className='gift-card card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default GifGridItem;
