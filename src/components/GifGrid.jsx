import React from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
    const [images, setImages] = React.useState([]);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=dN9rK9tDmzRxBVhGaNuMiAsa2yN2fN7i';
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }));
        setImages(gifs);
    };

    React.useEffect(() => {
        getGifs();
    }, []);

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {images.map(({ id, title }) => (
                    <li key={id}> {title}</li>
                ))}
            </ol>
        </div>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
