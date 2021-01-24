import heroes from '../data/heroes';

const getHeroesByPubliser = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publiser ${publisher} no es correcto`);
    }
    return heroes.filter((hero) => hero.publisher === publisher);
};
export default getHeroesByPubliser;
