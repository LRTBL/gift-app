import React from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './styles.css';

const GitExpertApp = () => {
    const [categories, setCategories] = React.useState([]);

    return (
        <div className='container p-5'>
            <h2>Gift App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};

export default GitExpertApp;
