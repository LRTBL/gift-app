import React from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
    const [categories, setCategories] = React.useState(['Dragon Ball']);

    //   const handleAdd = () => {
    //     setCategories(["Bleach", ...categories]);
    //     // setCategories( cats => [...cats, "Bleach"]);
    //   };

    return (
        <>
            <h2>Hola nuevo</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GitExpertApp;
