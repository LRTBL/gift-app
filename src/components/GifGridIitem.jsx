import React from 'react';
import PropTypes from 'prop-types';

const GifGridIitem = ({ img }) => {
    const { url, title } = img;
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridIitem.propTypes = {
    // eslint-disable-next-line react/require-default-props
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string,
    }),
};

export default GifGridIitem;
