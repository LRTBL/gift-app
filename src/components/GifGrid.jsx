import React from 'react';
import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridIitem from './GifGridIitem';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            {loading && <p className='animate__animated animate__flash'>Cargando ...</p>}
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <div className='card-grid'>
                {images.map((img) => (
                    <GifGridIitem key={img.id} img={img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
