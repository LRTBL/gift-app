import heroes from '../data/heroes';

const getHeroesById = (id) => heroes.find((hero) => hero.id === id);
export default getHeroesById;
